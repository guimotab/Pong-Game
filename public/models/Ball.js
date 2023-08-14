export class BallClass {
    #x
    #y
    #speedX = 7
    #speedY = 6
    #size = 17
    #color
    #fast = false
    constructor(x, y, color = 'white') {
        this.#x = x / 2 - this.#size/2
        this.#y = y / 2 - this.#size/2
        this.#color = color
    }

    invertDirectionX() {
        this.#speedX = -this.#speedX
    }
    invertDirectionY() {
        this.#speedY = -this.#speedY
    }
    increaseSpeedX(){
        this.#fast = true
        this.#speedX *= 1.7
    }
    increaseSpeedY(){
        this.#fast = true
        this.#speedY *= 1.7
    }
    decreaseSpeedX(){
        this.#fast = false
        this.#speedX /= 1.7
    }
    decreaseSpeedY(){
        this.#fast = false
        this.#speedY /= 1.7
    }
    
    calculateBallDirection() {
        let directionX = Math.round(Math.random());
        let directionY = Math.round(Math.random());
        directionX == 1 ? directionX = -1 : directionX = 1;
        directionY == 1 ? directionY = -1 : directionY = 1;

        this.#speedX *= directionX
        this.#speedY *= directionY
    }
    get x() {
        return this.#x
    }
    get y() {
        return this.#y
    }
    get speedX() {
        return this.#speedX
    }
    get speedY() {
        return this.#speedY
    }
    get color() {
        return this.#color
    }
    get fast() {
        return this.#fast
    }
    get color() {
        return this.#color
    }
    get size() {
        return this.#size
    }
    set x(newX) {
        this.#x = newX
    }
    set y(newY) {
        this.#y = newY
    }
    set speedX(newSpeedX) {
        this.#speedX = newSpeedX
    }
    set speedY(newSpeedY) {
        this.#speedY = newSpeedY
    }
    set color(newColor) {
        this.#color = newColor
    }
    set fast(newFast) {
        this.#fast = newFast
    }
    set size(newSize) {
        this.#size = newSize
    }
}
