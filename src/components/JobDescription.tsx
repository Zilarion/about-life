import {
    Box,
    Card,
    CardContent,
    Typography,
} from '@material-ui/core';
import { observer } from 'mobx-react-lite';

import { intl } from '../intl';
import { Job } from '../models/Job';

interface JobDescriptionProps {
    job: Job | null;
}

export const JobDescription = observer(({ job }: JobDescriptionProps) => {
    const jobName = job?.name ?? 'Unemployed hobo';
    const jobIncome = job?.income ?? 0;

    return <Card variant="outlined">
        <CardContent>
            <Typography
                color="textSecondary"
                gutterBottom
                variant="h5"
                component="h2"
            >
                About: work
            </Typography>
            <Typography component="div">
                <Box>
                    Your job
                </Box>
                <Box fontWeight="bold">
                    {jobName}
                </Box>
                <Box>
                    Your monthly income
                </Box>
                <Box fontWeight="bold">
                    {intl.formatNumber(
                        jobIncome,
                        {
                            style: 'currency',
                            currency: 'USD',
                        },
                    )}
                </Box>
            </Typography>
        </CardContent>
    </Card>;
});
