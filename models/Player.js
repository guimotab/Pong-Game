import { PlayerBase } from "./PlayerBase.js"

export class PlayerClass extends PlayerBase{
    #x 
    #y 
    #height 
    #width 
    #speed
    #score 
    #scoreboardNumber
    constructor(x = 45, y = 240, height = 150, width = 16, speed = 9, score = 0, scoreboardNumber = '../images/0.png'){
        super(x, y, height, width, speed, score, scoreboardNumber)
        // this.#x = x
        // this.#y = y
        // this.#sizePlayer = sizePlayer
        // this.#score = score
        // this.#scoreboardNumber = scoreboardNumber
    }
    // get x(){
    //     return this.#x
    // }
    // get y(){
    //     return this.#y
    // }
    // get height(){
    //     return this.#height
    // }
    // get width(){
    //     return this.#width
    // }
    // get score(){
    //     return this.#score
    // }
    // get scoreboardNumber() {
    //     return this.#scoreboardNumber
    // }
    // set x(newX){
    //     this.#x = newX
    // }
    // set y(newY){
    //     this.#y = newY
    // }
    // set height(newHeight){
    //     this.#height = newHeight
    // }
    // set width(newWidth) {
    //     this.#width = newWidth
    // }
    // set score(newScore){
    //     this.#score = newScore
    // }
    // set scoreboardNumber(newScoreboardNumber) {
    //     this.#scoreboardNumber = newScoreboardNumber
    // }
}  
