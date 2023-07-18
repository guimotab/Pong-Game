import { PlayerBase } from "./PlayerBase.js"

export class Player2Class extends PlayerBase{
    #x   //1255
    #y  
    #height
    #width 
    #speed
    #score  
    #scoreboardNumber = '../images/0.png'
    constructor(x = 1150, y = 240, height = 150, width = 16, speed = 9, score = 0, scoreboardNumber = '../images/0.png'){
        super(x, y, height, width, speed, score, scoreboardNumber)
        // this.#x = x
        // this.#y = y
        // this.#sizePlayer = sizePlayer
        // this.#score = score
        // this.#scoreboardNumber = scoreboardNumber
    }
    
}  