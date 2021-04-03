import {
    Box,
    Card,
    CardContent,
    Typography,
} from '@material-ui/core';
import { observer } from 'mobx-react-lite';

import { Resources } from '../models/Resources';

interface ResourceCardProps {
    resources: Resources;
}

export const ResourceCard = observer(({ resources: { cash } }: ResourceCardProps) => {
    return <Card variant="outlined">
        <CardContent>
            <Typography component="div">
                <Box>
                    You have
                </Box>
                <Box fontWeight="bold">
                    $
                    {cash}
                </Box>
            </Typography>
        </CardContent>
    </Card>;
});
