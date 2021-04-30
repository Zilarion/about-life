import { makeAutoObservable } from 'mobx';

import { actions } from '../data/actions';
import { Action } from './Action';
import { Game } from './Game';

export class Actions {
    private _actions: Action[];
    private _game: Game;

    constructor(game: Game) {
        this._game = game;
        this._actions = actions.map(action => new Action({
            ...action,
            game: this._game,
        }));
        makeAutoObservable(this);
    }

    public get availableActions() {
        return this._actions
            .filter(action => !action.completed)
            .filter(action => action.visible);
    }

    public get busyActions() {
        return this.startedActions
            .filter(action => !action.completed);
    }

    public get startedActions() {
        return this._actions
            .filter(action => action.started);
    }
}
