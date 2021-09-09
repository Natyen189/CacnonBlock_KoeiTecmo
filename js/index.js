import createBlock from "./cannon.js";
import { createCannonMouth } from "./cannon.js";
import { getRandomCannonType, PlaygroundHeight, PlaygroundWidth, EnemyPlaygroundWidth } from "./utility.js";
import { CannonType } from "./utility.js";
import swapBlock, { fireCannon } from "./server.js";
import { updateEnemyCannon, checkBlockMovable } from "./server.js";

var currentSelectedBlock = null;

$(document).ready(function(){  
    createPlayerPlayground(PlaygroundWidth, PlaygroundHeight);
    createEnemyPlayground(EnemyPlaygroundWidth, PlaygroundHeight);

    $('.block').click(function() {
        console.log("Selected block: " + $(this).attr("id"));

        if(currentSelectedBlock == null) {
            currentSelectedBlock = this;
        }
        else {
            if(checkBlockMovable(currentSelectedBlock) && checkBlockMovable(this)) {
                swapBlock(currentSelectedBlock, this);
                updateEnemyCannon();
                currentSelectedBlock = null;
            }

            currentSelectedBlock = null;
        }
    });

    $('.fire_button').click(function() {
        fireCannon();
        updateEnemyCannon();
    })
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
                var MouthID = "cannon_mouth_" + x;
                var CannonMouth = new createCannonMouth(getRandomCannonType(), MouthID);
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