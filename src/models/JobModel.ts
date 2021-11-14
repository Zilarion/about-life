import {
    Instance,
    types,
} from 'mobx-state-tree';

export interface JobProps {
    income: number;
    interest: number;
}

export const JobModel = types
    .model({
        interest: types.number,
        income: types.number,
    })
    .actions(self => ({
        setIncome(income: number) {
            self.income = income;
        },
        setInterest(interest: number) {
            self.interest = interest;
        },
    }))
    .named('Job');

export interface JobInstance extends Instance<typeof JobModel> {}

