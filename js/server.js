import { jq } from "./utility.js";

export default function swapBlock(firstBlock, secondBlock) {
    const parentA = firstBlock.parentNode;
    const siblingA = firstBlock.nextSibling === secondBlock ? firstBlock : firstBlock.nextSibling;

	var firstBlock_yPos = parseInt(firstBlock.id.charAt(7));
	var firstBlock_xPos = parseInt(firstBlock.id.charAt(9));

	var secondBlock_yPos = parseInt(secondBlock.id.charAt(7));
	var secondBlock_xPos = parseInt(secondBlock.id.charAt(9));

	var inSameBlock = firstBlock_yPos == secondBlock_yPos;
	var inSameBlockAndNextToEachOther = inSameBlock && Math.abs(firstBlock_xPos - secondBlock_xPos) == 1;
	var inSameColumn = firstBlock_xPos == secondBlock_xPos;
	var inSameColumnAndUpDown = inSameColumn && Math.abs(firstBlock_yPos - secondBlock_yPos) == 1;

	var allowSwapping = inSameBlockAndNextToEachOther || inSameColumnAndUpDown;

    if(allowSwapping) {
        // Move `nodeA` to before the `nodeB`
        secondBlock.parentNode.insertBefore(firstBlock, secondBlock);

        // Move `nodeB` to before the sibling of `nodeA`
        parentA.insertBefore(secondBlock, siblingA);

        var temp = firstBlock.id;
        firstBlock.id = secondBlock.id;
		secondBlock.id = temp;
    }
}

export function updateEnemyCannon() {
	for(let x = 0; x <= 6; x++) {
		for(let y = 3; y >= 0; y--) {
			var elementID = "#enemy_block_\\(" + x + "\\," + y + "\\)";
			if($(elementID).css("background-color") == "rgb(52, 58, 64)") {
				$(elementID).css("background-color", "red");
				break;
			}
		}
	}
}

export function fireCannon() {
	$(".cannon_mouth").each(function() {
		var cannonType = "";
		if(this.classList.contains("cannon_mouth_green")) {
			cannonType = "btn-success";
		}
		else if(this.classList.contains("cannon_mouth_blue")) {
			cannonType = "btn-primary";
		}

		var cannonLength = getCannonLength(cannonType);
		if(cannonLength != 0) {
			//fire
			//calculateDamage
			//resetCannonBlocks
		}
	});
}

function getCannonLength(cannonMouthType, id) {
	var sum = 0;

	for(let x = 4; x >= 0; x--) {
		var block = "#block_\\(" + id + "\\," + x + "\\)";
		// console.log($(block));
		// if($(block).classList.contains(cannonMouthType)) {
		sum++;
		// }
		// else break;
	}

	return sum;
}

export function calculateDamage() {
	
}

function resetCannonBlocks() {

}

export function checkBlockMovable(block) {
	if(block.classList.contains("btn-success")) {
		//console.log(block.nextSibling);
		return checkNextBlock(block.nextSibling, "btn-success");
	}
	else if(block.classList.contains("btn-primary")) {
		//console.log(block.nextSibling);
		return checkNextBlock(block.nextSibling, "btn-primary");
	}
}

function checkNextBlock(block, type) {
	if(!block.classList.contains(type)) {
		if(block.classList.contains("cannon_mouth"))
		{
			switch(type)
			{
				case "btn-success":
					if(block.classList.contains("cannon_mouth_green")) {
						return false;
					}
					// console.log("Hello");
					return true;
				case "btn-primary":
					if(block.classList.contains("cannon_mouth_blue")) {
						return false;
					}
					// console.log("Hello");
					return true;
				default:
					return true;
			}
		}

		return true;
	}
	else {
		// console.log("Hello");
		checkNextBlock(block.nextSibling, type);
	}
}