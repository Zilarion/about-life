import { JobProps } from '../models/Job';

export enum IncomeLevel {
    BarelyPaid = 500,
    LowPay = 1000,
    AveragePay = 2500,
    GreatPay = 3500,
    IncrediblePay = 5000,
}

export enum InterestLevel {
    Love = 2,
    Like = 1.5,
    Unbiased = 1,
    Dislike = 0.5,
    Hate = 0.2,
}

export const jobs: JobProps[] = [
    {
        income: IncomeLevel.BarelyPaid,
        interest: InterestLevel.Love,
        name: 'Art',
    }, {
        income: IncomeLevel.LowPay,
        interest: InterestLevel.Like,
        name: 'Wood working',
    },
    {
        income: IncomeLevel.AveragePay,
        interest: InterestLevel.Unbiased,
        name: 'Finance',
    }, {
        income: IncomeLevel.GreatPay,
        interest: InterestLevel.Dislike,
        name: 'IT',
    }, {
        income: IncomeLevel.IncrediblePay,
        interest: InterestLevel.Hate,
        name: 'Medicine',
    },
];
