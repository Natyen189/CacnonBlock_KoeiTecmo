import { CannonType, drawEllipse } from "./utility.js";

export default function createCannon(gameCanvas, x, y, size, type) {
    this.x = x;
    this.y = y;

    this.draw = function() {
        var ctx = gameCanvas.context;

        switch(type) {
            case CannonType.CANNON_BLOCK_GREEN:
                ctx.fillStyle = "green";
                break;
            case CannonType.CANNON_BLOCK_BLUE:
                ctx.fillStyle = "blue";
                break;
            case CannonType.Fire_BLOCK:
                ctx.fillStyle = "red";
                break;
        }

        ctx.fillRect(this.x, this.y, size, size);
    }
}

export function createCannonMouth(gameCanvas, x, y) {
    this.x = x;
    this.y = y;

    this.draw = function() {
        var ctx = gameCanvas.context;
        drawEllipse(ctx, x, y, 15, 40);
    }
}