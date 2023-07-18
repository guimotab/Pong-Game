import { PowersClass } from "../models/Powers.js";

const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");

const power = new PowersClass()
let showPower = false
let ballObject
let player1Object

export function createPower(screenSizeX, player1, ball){
    ballObject = ball
    player1Object = player1
    pincel.fillStyle = power.color
    pincel.fillRect(power.x, power.y, power.size, power.size);
    updatePower(screenSizeX, player1, ball)
}
export function decideColor(){
    const array = ['blue', 'red', 'yellow', 'gray']
    let color = 10
    while(color >= 4){
        color = Math.floor(Math.random()*10)
    }
    if(color == 0){
        return array[0]
    } else if(color == 1){
        return array[1]
    } else if(color == 2){
        return array[2]
    } else if(color == 3){
        return array[3]
    }
}
export function updatePower(screenSizeX, player1, ball){
    if(showPower){
        power.x += power.speedX
        if(power.x + power.size >= player1.x && power.y<= player1.y + player1.height && power.y + power.size >= player1.y){
            power.x = -20
            showPower = false
            activePower(power, player1, ball)
            setTimeout(callPower, 12000)
        }
        if(power.x > screenSizeX + 20){
            showPower = false
            power.x = -20
            setTimeout(callPower, 5000)
        }
    }
}

function activePower(power, player1, ball){
    if(power.color == 'blue'){
        ball.size = 28
    } else if(power.color == 'yellow'){
        if(ball.fast){
            ball.decreaseSpeedX()
            ball.decreaseSpeedY()
        }
        ball.speedX = 14
        ball.speedY = 12
    } else if(power.color == 'red'){
        player1.height = 230
    } else if(power.color == 'gray'){
        ball.color = 'gray'
    }
    setTimeout(clearPower, 6000)
}

function clearPower(){
    if(power.color == 'blue'){
        ballObject.size = 17
    } else if(power.color == 'yellow'){
        ballObject.speedX = 7
        ballObject.speedY = 6
    } else if(power.color == 'red'){
        player1Object.height = 150
    } else if(power.color == 'gray'){
        ballObject.color = 'white'
    }
    power.x = -20
}

export function callPower(){
    showPower = true
    power.color = decideColor()
    power.calculatePositionY()
}

