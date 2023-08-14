import { BallClass } from "../models/Ball.js";
import { Player2Class } from "../models/Player2.js";
import { bgColor, buildLine } from "../../utils/buildGame.js";
import { createOpponent, createP2 } from "../../utils/buildPlayers.js";
import { createScoreOp, createScoreP2 } from "../../utils/imagesGame.js";
import { buildBall } from "../../utils/buildBall.js";
import { movePlayersSolo } from "../../utils/movePlayers.js";
import { checkWinner, matchPoint } from "../../utils/winGame.js";
import { OpponentClass } from "../models/Opponent.js";
import { callPower, createPower} from "../../utils/createPower.js";

const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");
const screenSizeX = 1300 //1300
const screenSizeY = 600
const Opponent = new OpponentClass()
const player1 = new Player2Class(1300 - 66)
const ball = new BallClass(screenSizeX, screenSizeY)

let player1Up = false
let player1Down = false

reloadScreen()
function reloadScreen() {
    bgColor(screenSizeX, screenSizeY, "black");
    buildLine(screenSizeX, "white");

    checkWinner()
    
    movePlayersSolo(ball, Opponent, player1, player1Up, player1Down, screenSizeX, screenSizeY)

    createOpponent(Opponent);
    createP2(player1);
    createPower(screenSizeX, player1, ball)

    createScoreOp(Opponent, screenSizeX);
    createScoreP2(player1, screenSizeX);

    buildBall(ball, Opponent, player1);
    matchPoint(Opponent, player1, ball, screenSizeX, screenSizeY)
}
setTimeout(callPower, 6000)


document.addEventListener('keydown', evento =>{
    evento.preventDefault()
    if (evento.key == 'ArrowDown') {
        player1Up = false
        player1Down = true
    }
    if (evento.key == 'ArrowUp') {
        player1Down = false
        player1Up = true
    }
    if (evento.key == 'ArrowDown') {
        player1Up = false
        player1Down = true
    }
})
document.addEventListener('keyup', evento =>{
    evento.preventDefault()
    if (evento.key == 'ArrowUp') {
        player1Up = false
    }
    if (evento.key == 'ArrowDown') {
        player1Down = false
    }
})
setInterval(reloadScreen, 20)