export default function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getRandomCannonType() {
    var random = Math.floor(randomNumber(0, 10));

    if(random%2 == 0) return CannonType.CANNON_BLOCK_GREEN;

    return CannonType.CANNON_BLOCK_BLUE;
}

export function jq( myid ) {
    return "#" + myid.replace( / ( : | \ . | \ [ | \ ] | , | = | @ ) /g, "\\$1" );
}

export const CannonType = {
    CANNON_BLOCK_GREEN: 1,
    CANNON_BLOCK_BLUE: 2,
    CANNON_BLOCK_ENEMY : 3,
    Fire_BLOCK: 4,
}
