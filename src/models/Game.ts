import { makeAutoObservable } from 'mobx';

import { Actions } from './Actions';
import { Job } from './Job';
import { Resources } from './Resources';

const WORLD_DELTA_MINIMUM = 1000;

export class Game {
    private _animationFrameId: number | null = null;
    private _lastFrame: number | null = null;
    private _gameDelta: number = 0;

    private _resources: Resources;
    private _job: Job;
    private _actions: Actions;

    constructor() {
        this._resources = new Resources();
        this._actions = new Actions(this);
        this._job = new Job({
            income: 0,
            interest: 0,
        });

        this.start();

        makeAutoObservable(this);
    }

    public get resources() {
        return this._resources;
    }

    public get job() {
        return this._job;
    }

    public get actions() {
        return this._actions;
    }

    public start() {
        this._animationFrameId = window.requestAnimationFrame(this._tick);
    }

    public destroy() {
        if (this._animationFrameId != null) {
            window.cancelAnimationFrame(this._animationFrameId);
        }
    }

    private _worldUpdate(delta: number) {
        this.actions.startedActions.forEach(action => action.tick(delta));
    }

    private _update(delta: number) {
        this._gameDelta += delta;

        if (this._gameDelta > WORLD_DELTA_MINIMUM) {
            this._worldUpdate(this._gameDelta);
            this._gameDelta = 0;
        }
    }

    private _tick = (time: number) => {
        const delta = this._lastFrame ? time - this._lastFrame : 0;

        this._update(delta);

        this._lastFrame = time;
        this._animationFrameId = window.requestAnimationFrame(this._tick);
    }
}
