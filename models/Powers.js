export class PowersClass {
    #type
    #x = - 20
    #y 
    #speedX = 6
    #color
    #size = 15
    #active = false
    constructor() {
    }

    calculatePositionY() {
        let position = 0
        while (position > 560 || position < 40) {
            position = Math.round(Math.random() * 1000)
        }
        this.#y = position
    }

    get type() {
        return this.#type
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
    get color() {
        return this.#color
    }
    get size() {
        return this.#size
    }
    get active() {
        return this.#active
    }
    set type(newType) {
        this.#type = newType
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
    set color(newColor) {
        this.#color = newColor
    }set size(newSize) {
        this.#size = newSize
    }
    set active(newActive) {
        this.#active = newActive
    }
}