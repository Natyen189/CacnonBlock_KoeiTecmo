import createBlock from "./cannon.js";
import { createCannonMouth } from "./cannon.js";
import { getRandomCannonType } from "./utility.js";
import { CannonType } from "./utility.js";
import swapBlock from "./server.js";
import { updateEnemyCannon } from "./server.js";

var currentSelectedBlock = null;

$(document).ready(function(){  
    createPlayerPlayground(5,7);
    createEnemyPlayground(4,7);

    $('.block').click(function() {
        console.log("Selected block: " + $(this).attr("id"));

        if(currentSelectedBlock == null) {
            currentSelectedBlock = this;
        }
        else {
            swapBlock(currentSelectedBlock, this);
            currentSelectedBlock = null;

            updateEnemyCannon();
        }
    });
});

function createPlayerPlayground(width, height) {
    for(let x = 0; x < height; x++) {
        var newDiv = document.createElement("div");
        newDiv.className = "row_" + x + " d-flex align-items-center";
        $('.player_side').append(newDiv);
    }

    for (let x = 0; x < height; x++) {
        for(let y = 0; y < width; y++) {
            var BlockID = "(" + x + "," + y + ")";
            var Block = new createBlock(BlockID, getRandomCannonType());

            var currentDiv = ".row_" + x;
            $(currentDiv).append(Block.draw());

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
            var BlockID = "(" + x + "," + y + ")";
            
            if(y == 0) {
                var EnemyCannonMouth = new createCannonMouth(CannonType.CANNON_BLOCK_ENEMY);
                $(currentDiv).append(EnemyCannonMouth.draw());
            }

            var EnemyCannonBlock = new createBlock(BlockID, CannonType.CANNON_BLOCK_ENEMY);
            $(currentDiv).append(EnemyCannonBlock.draw());
        }
    }
}