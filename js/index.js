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

window.addEventListener('load', 
  function() { 
    startGame();
  }, false);

function startGame() {
    gameCanvas.start();
    createPlayerPlayground(7,5);
}

function createPlayerPlayground(width, height) {
    var xStartPos = 50;
    var yStartPos = 200;

    var xPos = xStartPos;
    var yPos = yStartPos;
    var Offset = 60;

    for (let x = 0; x < width; x++) {
        for(let y = 0; y < height; y++) {
            var Cannon = new createCannon(gameCanvas, xPos, yPos, 50, getRandomCannonType());
            Cannon.draw();
            Cannons.push(Cannon);

            if(y == height - 1) {
                var CannonMouth = new createCannonMouth(gameCanvas, xPos + 55, yPos + 5);
                CannonMouth.draw();
            }

            xPos += Offset;
        }
        yPos += Offset;
        xPos = xStartPos;
    }
}

function getRandomCannonType() {
    var random = Math.floor(randomNumber(0, 1));

    if(random == 0) return CannonType.CANNON_BLOCK_GREEN;

    return CannonType.CANNON_BLOCK_BLUE;
}