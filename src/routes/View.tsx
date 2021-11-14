import styled from '@emotion/styled';
import { createContext } from 'react';

import { actions } from '../data/actions';
import { GameModel } from '../models/GameModel';
import { mapGameSchemaToSnapshot } from '../schema/mapGameSchemaToSnapshot';
import { assertDefined } from '../util/assertDefined';
import { Routes } from './Routes';

const Content = styled.div`
    position: relative;
`;

const game = GameModel.create(
    mapGameSchemaToSnapshot({ actions }),
);
game.actions.actions.forEach(action => {
    const schema = assertDefined(
        actions.find(actionSchema => actionSchema.name === action.name),
    );
    action.setSchema(schema);
});
game.start();
export const GameContext = createContext(game);

export function View() {
    return <div>
        <GameContext.Provider value={game}>
            <Content>
                <Routes />
            </Content>
        </GameContext.Provider>
    </div>;
}
