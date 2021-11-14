import { GameInstance } from '../models/GameModel';

export interface ActionSchema {
    name: string;
    description: string;
    repeatable?: boolean;
    start?: (game: GameInstance) => void;
    enabled?: (game: GameInstance) => void;
    end?: (game: GameInstance) => void;
    visible: (game: GameInstance) => boolean;
    duration: (game: GameInstance) => number;
    whenUnlocked?: (game: GameInstance, delta: number) => void;
}
