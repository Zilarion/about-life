import { makeAutoObservable } from 'mobx';

export interface JobProps {
    income: number;
    interest: number;
}

export class Job {
    private _interest: number;
    private _income: number;

    constructor({
        income,
        interest,
    }: JobProps) {
        this._income = income;
        this._interest = interest;

        makeAutoObservable(this);
    }

    public get income() {
        return this._income;
    }

    public setIncome(income: number) {
        this._income = income;
    }

    public get interest() {
        return this._interest;
    }

    public setInterest(interest: number) {
        this._interest = interest;
    }
}
