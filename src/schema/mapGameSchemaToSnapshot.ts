import { GameSnapshot } from '../models/GameModel';
import { GameSchema } from './GameSchema';
import { mapActionSchemaToSnapshot } from './mapActionSchemaToSnapshot';

const initialSnapshot: Omit<GameSnapshot, 'actions'> = {
    id: 'game',
    job: {
        income: 0,
        interest: 0,
    },
    resources: {
        cash: 1000,
        happiness: 1,
    },
};

export function mapGameSchemaToSnapshot(
    { actions }: GameSchema,
): GameSnapshot {
    return {
        actions: { actions: actions.map(mapActionSchemaToSnapshot) },
        ... initialSnapshot,
    };
}
