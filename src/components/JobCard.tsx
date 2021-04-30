import styled from '@emotion/styled';
import {
    Box,
    Card,
    CardContent,
} from '@material-ui/core';
import { observer } from 'mobx-react-lite';

import { Job } from '../models/Job';
import { formatNumber } from '../util/formatNumber';

interface JobCardProps {
    job: Job | null;
}

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const JobCard = observer(({ job }: JobCardProps) => {
    const jobIncome = job?.income ?? 0;

    return <Card variant="outlined">
        <CardContent>
            <ContentWrapper>
                <Box>
                    Your monthly income
                </Box>
                <Box fontWeight="bold">
                    {formatNumber(jobIncome)}
                </Box>
            </ContentWrapper>
        </CardContent>
    </Card>;
});
