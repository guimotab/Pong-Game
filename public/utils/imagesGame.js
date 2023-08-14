const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");
const score1 = new Image();
const score2 = new Image();
const oponenteWin = new Image();
const euWin = new Image();

oponenteWin.src = '../images/op-gan.png';
euWin.src = '../images/eu-gan.png';

export function createScoreP1(Player1, screenSizeX) {
    score1.src = Player1.scoreboardNumber
    const positionX = (screenSizeX/2 - 50 -(screenSizeX/10))
    pincel.drawImage(score1, positionX, 0, 100, 100)
}
export function createScoreP2(Player2, screenSizeX) {
    score2.src = Player2.scoreboardNumber
    const positionX = (screenSizeX/2 - 50 +(screenSizeX/10))
    pincel.drawImage(score2, positionX, 0, 100, 100)
}
export function createScoreOp(opponent, screenSizeX) {
    score1.src = opponent.scoreboardNumber
    const positionX = (screenSizeX/2 - 50 -(screenSizeX/10))
    pincel.drawImage(score1, positionX, 0, 100, 100)
}