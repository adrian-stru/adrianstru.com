export default class Mouse {
    public x: number;
    public y: number;

    constructor() {
        this.x = 0;
        this.y = 0;
    }

    public setX(x: number) {
        this.x = x;
    }

    public setY(y: number) {
        this.y = y;
    }

    public set(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
