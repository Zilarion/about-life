import { useContext } from 'react';

import { GameContext } from '../routes/View';

export function useGame() {
    return useContext(GameContext);
}
