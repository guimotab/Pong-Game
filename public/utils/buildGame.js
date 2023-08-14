const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");

export function buildLine(screenSizeX, color){
    const initialLineX = screenSizeX/2 - 5
    let yPontilhado = 5;
    pincel.fillStyle = color;
    while (yPontilhado < 600) {
        pincel.fillRect(initialLineX , yPontilhado, 10, 20);
        yPontilhado += 30;
    }
}
export function bgColor(screenSizeX, screenSizeY, color){
    pincel.fillStyle = color;
    pincel.fillRect(0, 0, screenSizeX, screenSizeY);
}

