export class PlayerBase{
    #x 
    #y 
    #height 
    #width 
    #speed
    #score 
    #scoreboardNumber
    constructor(x, y, height, width, speed, score, scoreboardNumber){
        this.#x = x
        this.#y = y
        this.#width = width
        this.#height = height
        this.#speed = speed
        this.#score = score
        this.#scoreboardNumber = scoreboardNumber
    }
    scoredAPoint(){
        const images = ['../images/0.png','../images/1.png','../images/2.png','../images/3.png','../images/4.png','../images/5.png','../images/6.png','../images/7.png','../images/8.png','../images/9.png']
        this.#scoreboardNumber = images[this.#score]
    }
    get x(){
        return this.#x
    }
    get y(){
        return this.#y
    }
    get height(){
        return this.#height
    }
    get width(){
        return this.#width
    }
    get score(){
        return this.#score
    }
    get scoreboardNumber() {
        return this.#scoreboardNumber
    }
    get speed (){
        return this.#speed
    }
    set x(newX){
        this.#x = newX
    }
    set y(newY){
        this.#y = newY
    }
    set height(newHeight){
        this.#height = newHeight
    }
    set width(newWidth) {
        this.#width = newWidth
    }
    set score(newScore){
        this.#score = newScore
    }
    set scoreboardNumber(newScoreboardNumber) {
        this.#scoreboardNumber = newScoreboardNumber
    }
    set speed (newSpeed){
        this.#speed = newSpeed
    }
}