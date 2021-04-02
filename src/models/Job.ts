interface JobProps {
    name: string;
    income: number;
    interest: number;
}

export class Job {
    private _interest: number;
    private _income: number;
    private _name: string;

    constructor({
        name,
        income,
        interest
    }: JobProps) {
        this._name = name;
        this._income = income;
        this._interest = interest;
    }

    public get name() {
        return this._name;
    }
    public get income() {
        return this._income;
    }
    public get interest() {
        return this._interest;
    }
}
