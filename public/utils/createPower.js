import { PowersClass } from "../public/models/Powers.js";

const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");

const power = new PowersClass()
let showPower = false
let ballObject
let player1Object

export function createPower(screenSizeX, player1, ball) {
    ballObject = ball
    player1Object = player1
    pincel.fillStyle = power.color
    pincel.fillRect(power.x, power.y, power.size, power.size);
    updatePower(screenSizeX, player1, ball)
}
export function decideColor() {
    const array = ['blue', 'red', 'yellow', 'gray']
    let color = 10
    while (color >= 4) {
        color = Math.floor(Math.random() * 10)
    }
    return array[color]
}
export function updatePower(screenSizeX, player1, ball) {
    if (showPower) {
        power.x += power.speedX
        if (power.x + power.size >= player1.x && power.x && power.x - power.size <= player1.x + player1.width && power.y <= player1.y + player1.height && power.y + power.size >= player1.y) {
            power.x = -20
            showPower = false
            activePower(power, player1, ball)
            setTimeout(callPower, 12000)
        }
        if (power.x > screenSizeX + 20) {
            showPower = false
            power.x = -20
            setTimeout(callPower, 7000)
        }
    }
}

let setColor = true
let countingActive = false
let powerGrayActive = false
function activePower(power, player1, ball) {
    function changeColorBall(ball) {
        if(powerGrayActive){
            countingActive = false
            if (setColor) {
                ball.color = 'black'
                setColor = false
            } else {
                ball.color = 'white'
                setColor = true
            }
            setTimeout(()=>changeColorBall(ball), 1000)
        }
    }
    if (power.color == 'blue') {
        ball.size = 28
    } else if (power.color == 'yellow') {
        if (ball.fast) {
            ball.decreaseSpeedX()
            ball.decreaseSpeedY()
        }
        ball.speedX *= 2
        ball.speedY *= 2
    } else if (power.color == 'red') {
        player1.height = 230
    } else if (power.color == 'gray') {
        if (!countingActive) {
            powerGrayActive = true
            setTimeout(()=>changeColorBall(ball), 1000)
            countingActive = true
        }
    }
    setTimeout(clearPower, 8000)
}

function clearPower() {
    if (power.color == 'blue') {
        ballObject.size = 17
    } else if (power.color == 'yellow') {
        if (ballObject.fast) {
            ballObject.decreaseSpeedX()
            ballObject.decreaseSpeedY()
        }
        ballObject.speedX /= 2
        ballObject.speedY /= 2
    } else if (power.color == 'red') {
        player1Object.height = 150
    } else if (power.color == 'gray') {
        ballObject.color = 'white'
        setColor = true
        powerGrayActive = false
        countingActive = false
    }
    power.x = -20
}

export function callPower() {
    showPower = true
    power.color = decideColor()
    power.calculatePositionY()
}

