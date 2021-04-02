const WORLD_DELTA_MINIMUM = 1000;

export class Game {
    private _animationFrameId: number | null = null;
    private _lastFrame: number | null = null;
    private _gameDelta: number = 0;

    constructor() {
        this.start();
    }

    public start() {
        this._animationFrameId = window.requestAnimationFrame(this._tick);
    }

    public destroy() {
        if (this._animationFrameId != null) {
            window.cancelAnimationFrame(this._animationFrameId);
        }
    }

    private _worldUpdate(_delta: number) {
        // TODO: world update logic
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
