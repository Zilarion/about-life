import styled from '@emotion/styled';
import { Button } from '@material-ui/core';
import { observer } from 'mobx-react-lite';

import { useGame } from '../hooks/useGame';

const ActionWrapper = styled.div`
    display: grid;
    grid-gap: ${p => p.theme.spacing(2)}px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 50px;
`;

export const Actions = observer(() => {
    const { actions: { availableActions } } = useGame();

    return <ActionWrapper>
        {
            availableActions.map(({
                name,
                start,
                enabled,
            }) =>
                <Button
                    key={name}
                    variant="contained"
                    disableElevation
                    color="primary"
                    disabled={!enabled}
                    onClick={start}
                >
                    {name}
                </Button>,
            )
        }
    </ActionWrapper>;
});
