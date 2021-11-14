import {
    Instance,
    types,
} from 'mobx-state-tree';

import { ActionModel } from './ActionModel';

export const ActionsModel = types
    .model({ actions: types.array(ActionModel) })
    .views(self => ({
        get availableActions() {
            return self.actions
                .filter(action => !action.completed)
                .filter(action => action.visible);
        },

        get startedActions() {
            return self.actions
                .filter(action => action.started);
        },
    }))
    .views(self => ({
        get busyActions() {
            return self.startedActions
                .filter(action => !action.completed);
        },
    }))
    .named('Actions');

export interface ActionsInstance extends Instance<typeof ActionsModel> {}
