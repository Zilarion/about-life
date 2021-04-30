import {
    Box,
    Card,
    CardContent,
    Typography,
} from '@material-ui/core';
import { observer } from 'mobx-react-lite';

import { Resources } from '../models/Resources';
import { formatNumber } from '../util/formatNumber';

interface ResourceCardProps {
    resources: Resources;
}

export const ResourceCard = observer(({
    resources: {
        cash, happiness,
    },
}: ResourceCardProps) => {
    return <Card variant="outlined">
        <CardContent>
            <Typography component="div">
                <Box>
                    Cash
                </Box>
                <Box fontWeight="bold">
                    {formatNumber(cash)}
                </Box>
                <Box>
                    Happiness
                </Box>
                <Box fontWeight="bold">
                    {happiness}
                </Box>
            </Typography>
        </CardContent>
    </Card>;
});
