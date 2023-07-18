import { BallClass } from "./models/Ball.js";
import { PlayerClass } from "./models/Player.js";
import { Player2Class } from "./models/Player2.js";
import { bgColor, buildLine } from "./utils/buildGame.js";
import { createP1, createP2 } from "./utils/buildPlayers.js";
import { createScoreP1, createScoreP2 } from "./utils/imagesGame.js";
import { buildBall } from "./utils/buildBall.js";
import { movePlayersDuo } from "./utils/movePlayers.js";
import { checkWinner, matchPoint } from "./utils/winGame.js";

const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");
const screenSizeX = 1300 //1300
const screenSizeY = 600
const player1 = new PlayerClass()
const player2 = new Player2Class(1300 - 66)
const ball = new BallClass(screenSizeX, screenSizeY)

let player2Up = false
let player2Down = false
let player1Up = false
let player1Down = false

reloadScreen()
function reloadScreen() {
    bgColor(screenSizeX, screenSizeY, "black");
    buildLine(screenSizeX, "white");

    checkWinner()
    
    movePlayersDuo(player1, player2, player1Up, player1Down, player2Up, player2Down, screenSizeY)

    createP1(player1);
    createP2(player2);

    createScoreP1(player1, screenSizeX);
    createScoreP2(player2, screenSizeX);

    buildBall(ball, player1, player2);
    matchPoint(player1, player2, ball, screenSizeX, screenSizeY)
    
}

document.addEventListener('keydown', evento =>{
    evento.preventDefault()
    if (evento.key == 'w') {
        player1Down = false
        player1Up = true
    }
    if (evento.key == 's') {
        player1Up = false
        player1Down = true
    }
    if (evento.key == 'ArrowDown') {
        player2Up = false
        player2Down = true
    }
    if (evento.key == 'ArrowUp') {
        player2Down = false
        player2Up = true
    }
    if (evento.key == 'ArrowDown') {
        player2Up = false
        player2Down = true
    }
})
document.addEventListener('keyup', evento =>{
    evento.preventDefault()
    if (evento.key == 'w') {
        player1Up = false
    }
    if (evento.key == 's') {
        player1Down = false
    }
    if (evento.key == 'ArrowUp') {
        player2Up = false
    }
    if (evento.key == 'ArrowDown') {
        player2Down = false
    }
})
setInterval(reloadScreen, 20)