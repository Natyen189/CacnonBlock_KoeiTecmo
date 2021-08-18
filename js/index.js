import createCannon from "./cannon.js";
import { createCannonMouth } from "./cannon.js";
import randomNumber from "./utility.js";
import { CannonType } from "./utility.js";

var canvasWidth = 1280;
var canvasHeight = 720;

var gameCanvas = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

let Cannons = new Array();

$(document).ready(function(){  
    createPlayerPlayground(5,7);
    createEnemyPlayground(4,7);
});

function createPlayerPlayground(width, height) {
    for(let x = 0; x < height; x++) {
        var newDiv = document.createElement("div");
        newDiv.className = "row_" + x + " d-flex align-items-center";
        $('.player_side').append(newDiv);
    }

    for (let x = 0; x < height; x++) {
        for(let y = 0; y < width; y++) {
            var Cannon = new createCannon(getRandomCannonType());
            Cannons.push(Cannon);

            var currentDiv = ".row_" + x;
            $(currentDiv).append(Cannon.draw());

            if(y == width - 1) {
                var CannonMouth = new createCannonMouth(getRandomCannonType());
                $(currentDiv).append(CannonMouth.draw());
            }
        }
    }
}

function createEnemyPlayground(width, height) {
    for(let x = 0; x < height; x++) {
        var newDiv = document.createElement("div");
        newDiv.className = "enemy_row_" + x + " d-flex align-items-center";
        $('.enemy_side').append(newDiv);
    }

    for (let x = 0; x < height; x++) {
        for(let y = 0; y < width; y++) {
            var currentDiv = ".enemy_row_" + x;
            
            if(y == 0) {
                var EnemyCannonMouth = new createCannonMouth(CannonType.CANNON_BLOCK_ENEMY);
                $(currentDiv).append(EnemyCannonMouth.draw());
            }

            var EnemyCannon = new createCannon(CannonType.CANNON_BLOCK_ENEMY);
            $(currentDiv).append(EnemyCannon.draw());
        }
    }
}

function getRandomCannonType() {
    var random = Math.floor(randomNumber(0, 1));

    if(random == 0) return CannonType.CANNON_BLOCK_GREEN;

    return CannonType.CANNON_BLOCK_BLUE;
}