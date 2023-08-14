import { PlayerBase } from "./PlayerBase.js"

export class OpponentClass extends PlayerBase {
    #x   //1255
    #y  
    #height
    #width 
    #speed
    #score  
    #scoreboardNumber = '../images/0.png'
    constructor(x = 45, y = 240, height = 150, width = 16, speed = 9, score = 0, scoreboardNumber = '../images/0.png'){
        super(x, y, height, width, speed, score, scoreboardNumber)
        this.#x = x
        this.#y = y
        this.#height = height
        this.#width = width
        this.#speed = speed
        this.#score = score
        this.#scoreboardNumber = scoreboardNumber
    }

    /* cria sistema de "inteligencia artificial" que coloca uma posição por por objetivo e vai acrescentando
    de 1+1 para chegar até na posição desejada, para ter um movimento mais fluido do jogador 2 */
    static marginError = 0
    followBall(ball, screenSizeX, screenSizeY, player2){
        const positionBallY = ball.y
        if (ball.x <= 10 || ball.x + ball.size >= screenSizeX - 10){
            console.log("entrou");
            this.marginError = 0
        }
        if(ball.x + ball.size >= player2.x){
            this.marginError = this.calculateMarginError()
        }
        
        if(this.y + this.height/2 < positionBallY + this.marginError){
            this.y += this.speed
        } 
        if (this.y + this.height/2 > positionBallY + this.marginError){
            this.y -= this.speed
        }
        if (this.y < 0){
            this.y = 0
        } else if (this.y + this.height > screenSizeY){
            this.y = screenSizeY - this.height
        }
    }
    calculateMarginError(){
        let marginError = 0 
        let direction = Math.round(Math.random()*10)
        direction > 5 ? direction = true : direction = false

        if(direction){
            marginError = Math.round(Math.random()*100)
            if(marginError > 20) {
                marginError = 0
            } else {
                marginError = 100
            }
            return - marginError

        } else {
            marginError = Math.round(Math.random()*100)
            if(marginError > 20) {
                marginError = 0
            } else {
                marginError = 140
            }
            return marginError

        }
            

    }
}