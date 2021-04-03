import {
    Box,
    Card,
    CardContent,
    Typography,
} from '@material-ui/core';
import { observer } from 'mobx-react-lite';

import { intl } from '../intl';
import { Job } from '../models/Job';
import styled from '../themed-components';

interface JobCardProps {
    job: Job | null;
}

const ContentWrapper = styled(Typography)`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const JobCard = observer(({ job }: JobCardProps) => {
    const jobName = job?.name ?? 'Unemployed hobo';
    const jobIncome = job?.income ?? 0;

    return <Card variant="outlined">
        <CardContent>
            <ContentWrapper>
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
            </ContentWrapper>
        </CardContent>
    </Card>;
});
