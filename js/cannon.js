import { CannonType } from "./utility.js";

export default function createCannon(type) {
    this.type = type;

    this.draw = function() {
        var color = "";

        switch(type) {
            case CannonType.CANNON_BLOCK_GREEN:
                color = "btn-success";
                break;
            case CannonType.CANNON_BLOCK_BLUE:
                color = "btn-primary";
                break;
            case CannonType.Fire_BLOCK:
                color = "btn-danger";
                break;
            case CannonType.CANNON_BLOCK_ENEMY:
                color = "btn-dark";
                return '<button type="button" class="btn ' + color + ' enemy_cannon"></button>';
            default:
                break;
        }
 
        var buttonClass = "btn " + color + " cannon";

        return '<button type="button" class="' + buttonClass + '"></button>';
    }
}

export function createCannonMouth(type) {
    this.type = type;

    this.draw = function() {
        var cannonMouthClass = "cannon_mouth cannon_mouth";

        switch(type) {
            case CannonType.CANNON_BLOCK_GREEN:
                cannonMouthClass += "_green";
                break;
            case CannonType.CANNON_BLOCK_BLUE:
                cannonMouthClass += "_blue";
                break;
            case CannonType.CANNON_BLOCK_ENEMY:
                cannonMouthClass += "_black";
                return  '<div class="' + cannonMouthClass + '"/>'
            default:
                break;
        }
        
        return  '<div class="' + cannonMouthClass + '"/>'
    }
}