const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");
export function createP1(Player1) {
    pincel.fillStyle = "#f44e3f";
    pincel.fillRect(Player1.x, Player1.y, Player1.width, Player1.height);
}
export function createP2(Player2) {
    pincel.fillStyle = '#8BF5FA';
    pincel.fillRect(Player2.x, Player2.y, Player2.width, Player2.height);
}
export function createOpponent(opponent) {
    pincel.fillStyle = "#f44e3f";
    pincel.fillRect(opponent.x, opponent.y, opponent.width, opponent.height);
}