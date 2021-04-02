import { createContext } from 'react';

import { Game } from '../models/Game';
import styled from '../themed-components';
import { Routes } from './Routes';

const Content = styled.div`
    position: relative;
`;

const game = new Game();
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
