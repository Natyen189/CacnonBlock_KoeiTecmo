export default function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const CannonType = {
    CANNON_BLOCK_GREEN: 1,
    CANNON_BLOCK_BLUE: 2,
    CANNON_BLOCK_ENEMY : 3,
    Fire_BLOCK: 4,
}