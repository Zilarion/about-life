import { makeAutoObservable } from 'mobx';

import { assert } from '../util/assert';
import { Game } from './Game';

export interface ActionInputProps {
    start?: (game: Game) => void;
    enabled?: (game: Game) => void;
    end?: (game: Game) => void;
    visible: (game: Game) => boolean;
    name: string;
    description: string;
    duration: (game: Game) => number;
    whenUnlocked?: (game: Game) => void;
    repeatable?: boolean;
}

interface ActionProps extends ActionInputProps {
    game: Game;
}

export class Action {
    private _progress: number = 0;
    private _started: boolean = false;
    private _completed: boolean = false;

    private _repeatable: boolean;

    private _name: string;
    private _description: string;

    private _duration: (game: Game) => number;
    private _visible: (game: Game) => boolean;

    private _enabled?: (game: Game) => void;
    private _start?: (game: Game) => void;
    private _end?: (game: Game) => void;
    private _whenUnlocked?: (game: Game, delta: number) => void;
    private _game: Game;

    constructor({
        name,
        description,
        duration,
        start,
        visible,
        whenUnlocked,
        enabled,
        end,
        game,
        repeatable = false,
    }: ActionProps) {
        this._name = name;
        this._description = description;
        this._duration = duration;
        this._enabled = enabled;
        this._start = start;
        this._visible = visible;
        this._whenUnlocked = whenUnlocked;
        this._end = end;
        this._game = game;
        this._repeatable = repeatable;

        makeAutoObservable(this);
    }

    public start = () => {
        const canStart = this._enabled?.(this._game) ?? true;
        if (!canStart) {
            return;
        }
        this._started = true;
        this._completed = false;
        this._start?.(this._game);
    }

    public get completed() {
        return this._completed && !this._repeatable;
    }

    public get enabled() {
        const isEnabled = this._enabled?.(this._game) ?? true;
        return isEnabled && !this.completed && !this.started;
    }

    public get visible() {
        return !this.completed && this._visible(this._game);
    }

    public get name() {
        return this._name;
    }

    public get started() {
        return this._started;
    }

    public get description() {
        return this._description;
    }

    public tick = (delta: number) => {
        assert(this._started || this._completed);

        if (this._completed) {
            this._whenUnlocked?.(this._game, delta);
            return;
        }

        this._progress += delta;

        if (this._progress >= this._duration(this._game)) {
            this._completed = true;
            this._started = false;
            this._end?.(this._game);
        }
    }
}
