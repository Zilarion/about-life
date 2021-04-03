import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@material-ui/core';

import {
    IncomeLevel,
    InterestLevel,
} from '../data/jobs';
import { JobProps } from '../models/Job';

const incomeToString: Record<IncomeLevel, string> = {
    [IncomeLevel.BarelyPaid]: 'badly',
    [IncomeLevel.LowPay]: 'low',
    [IncomeLevel.AveragePay]: 'average',
    [IncomeLevel.GreatPay]: 'great',
    [IncomeLevel.IncrediblePay]: 'incredibly well',
};

const interestToString: Record<InterestLevel, string> = {
    [InterestLevel.Love]: 'love',
    [InterestLevel.Like]: 'like',
    [InterestLevel.Unbiased]: 'think is ok',
    [InterestLevel.Dislike]: 'dislike',
    [InterestLevel.Hate]: 'hate',
};

interface JobDescriptionProps {
    job: JobProps;
    onClick: (job: JobProps) => void;
}
export const JobDescription = ({
    job,
    onClick,
}: JobDescriptionProps) => {
    const {
        name,
        interest,
        income,
    } = job;

    const payDescription = incomeToString[income];
    const interestDescription = interestToString[interest];
    return <Card variant="outlined">
        <CardContent>
            <Typography>
                {'A job in '}
                <strong>
                    {name}
                </strong>
                {' that you '}
                <strong>
                    {interestDescription}
                </strong>
                {' and pays '}
                <strong>
                    {payDescription}
                </strong>
            </Typography>
        </CardContent>
        <CardActions>
            <Button
                variant="outlined"
                size="small"
                onClick={() => onClick(job)}
            >
                Choose this job
            </Button>
        </CardActions>
    </Card>;
};
