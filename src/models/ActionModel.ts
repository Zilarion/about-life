import {
    getParentOfType,
    Instance,
    SnapshotIn,
    types,
} from 'mobx-state-tree';

import { ActionSchema } from '../schema/ActionSchema';
import { assert } from '../util/assert';
import {
    GameInstance,
    GameModel,
} from './GameModel';

export const ActionModel = types
    .model({
        name: types.identifier,
        description: types.string,
        progress: types.optional(types.number, 0),
        started: types.optional(types.boolean, false),
        completeCount: types.optional(types.number, 0),
    })
    .volatile(() => ({ schema: null }) as unknown as { schema: ActionSchema })
    .actions(self => ({
        setSchema(schema: ActionSchema) {
            self.schema = schema;
        },
    }))
    .views(() => ({
        get game(): GameInstance {
            return getParentOfType(this, GameModel) as GameInstance;
        },
    }))
    .views(self => ({
        get repeatable() {
            return self.schema.repeatable ?? false;
        },
        get completed() {
            if (this.repeatable) {
                return false;
            }

            return self.completeCount === 1;
        },
        visible() {
            return !this.completed && self.schema.visible(self.game);
        },
        enabled() {
            const isEnabled = self.schema.enabled?.(self.game) ?? true;
            return isEnabled && !this.completed && !self.started;
        },
    }))
    .actions(self => ({
        start() {
            const canStart = self.schema.enabled?.(self.game) ?? true;
            if (!canStart) {
                return;
            }

            self.started = true;
            self.schema.start?.(self.game);
        },

        tick(delta: number) {
            assert(self.started || self.completed);

            if (self.completed) {
                self.schema.whenUnlocked?.(self.game, delta);
                return;
            }

            self.progress += delta;

            if (self.progress >= self.schema.duration(self.game)) {
                self.completeCount ++;
                self.started = false;
                self.schema.end?.(self.game);
            }
        },
    }))
    .named('Action');

export interface ActionInstance extends Instance<typeof ActionModel> {}
export interface ActionSnapshot extends SnapshotIn<typeof ActionModel> {}
