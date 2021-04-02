import { makeAutoObservable } from 'mobx';

export class Resources {
    private _cash: number = 1000;
    private _happiness: number = 1;

    constructor() {
        makeAutoObservable(this);
    }

    public get cash() {
        return this._cash;
    }

    public get happiness() {
        return this._happiness;
    }
}
