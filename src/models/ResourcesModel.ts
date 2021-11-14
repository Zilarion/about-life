import {
    Instance,
    types,
} from 'mobx-state-tree';

export const ResourcesModel = types
    .model({
        cash: types.number,
        happiness: types.number,
    })
    .actions(self => ({
        addCash(value: number) {
            self.cash += value;
        },
        removeCash(value: number) {
            self.cash -= value;
        },
        addHappiness(value: number) {
            self.happiness += value;
        },
    }))
    .named('Resources');

export interface ResourcesInstance extends Instance<typeof ResourcesModel>{}
