import {
    Instance,
    SnapshotIn,
    types,
} from 'mobx-state-tree';

import { ActionsModel } from './ActionsModel';
import { JobModel } from './JobModel';
import { ResourcesModel } from './ResourcesModel';

const WORLD_DELTA_MINIMUM = 1000;

export const GameModel = types
    .model({
        id: types.identifier,
        job: JobModel,
        resources: ResourcesModel,
        actions: ActionsModel,
        animationFrameId: types.maybeNull(types.number),
        lastFrame: types.maybeNull(types.number),
        gameDelta: types.optional(types.number, 0),
    })
    .actions(self => ({
        start() {
            self.animationFrameId = window.requestAnimationFrame(this._tick);
        },

        destroy() {
            if (self.animationFrameId != null) {
                window.cancelAnimationFrame(self.animationFrameId);
            }
        },

        _worldUpdate(delta: number) {
            self.actions.startedActions.forEach(action => action.tick(delta));
        },

        _update(delta: number) {
            self.gameDelta += delta;

            if (self.gameDelta > WORLD_DELTA_MINIMUM) {
                this._worldUpdate(self.gameDelta);
                self.gameDelta = 0;
            }
        },

        _tick (time: number) {
            const delta = self.lastFrame ? time - self.lastFrame : 0;

            this._update(delta);

            self.lastFrame = time;
            self.animationFrameId = window.requestAnimationFrame(this._tick);
        },
    }))
    .named('Game');

export interface GameInstance extends Instance<typeof GameModel> {}
export interface GameSnapshot extends SnapshotIn<typeof GameModel>{}
