import { ActionSchema } from '../schema/ActionSchema';

export const actions: ActionSchema[] = [
    {
        name: 'Work',
        description: 'Go and make some $$$',
        end: ({
            job,
            resources,
        }) => {
            resources.addCash(job.income);
        },
        visible: ({ job }) => job.income > 0,
        duration: ({
            job, resources,
        }) => {
            const willpower = resources.happiness;
            return job.interest * 2000 / willpower;
        },
        repeatable: true,
    },
    {
        name: 'Spent time with friends',
        description: 'Meetup with some friends and spent some quality time.',
        enabled: ({
            resources,
            job,
        }) => {
            if (job.income === 0) {
                return false;
            }

            const cost = job.income / 100;
            return resources.cash >= cost;
        },
        start: ({
            resources,
            job,
        }) => {
            const cost = job.income / 100;
            resources.removeCash(cost);
        },
        end: ({ resources }) => {
            resources.addHappiness(0.05);
        },
        visible: () => true,
        duration: () => 2000,
        repeatable: true,
    },
    {
        name: 'Find a job',
        description: 'Go and search for a job that earns you some money',
        end: ({ job }) => {
            job.setIncome(1000);
            job.setInterest(1.2);
        },
        visible: () => true,
        duration: () => 5000,
    },
];
