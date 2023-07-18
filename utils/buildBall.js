const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");
export function buildBall(ball, player1, player2, screenSizeX, screenSizeY) {
    pincel.fillStyle = ball.color
    pincel.fillRect(ball.x, ball.y, ball.size, ball.size);
    updateBall(ball, player1, player2, screenSizeX, screenSizeY)
}
export function updateBall(ball, player1, player2) {
    ball.x += ball.speedX;
    ball.y += ball.speedY;

    const ballRadiusYDown = ball.y + ball.size
    const ballRadiusYTop = ball.y
    const ballCenter = ball.y + ball.size/2

    const ballRadiusXRight = ball.x + ball.size
    const ballRadiusXLeft = ball.x

    const Player2Width = player2.x + player2.width
    const Player2Height = player2.y + player2.height

    const Player1Width = player1.x + player1.width
    const Player1Height = player1.y + player1.height
    //verifica se bateu borda
    if (ballRadiusYDown >= 600 || ballRadiusYTop <= 0) {
        ball.invertDirectionY()
    }
    //verifica se bateu raquete minha
    if (ballRadiusXRight >= player2.x && ballRadiusXRight <= Player2Width && ballRadiusYDown >= player2.y && ballRadiusYTop <= Player2Height) {
        ball.invertDirectionX()
        if (ball.fast == false) {
            //acelera ball bateu cima P2
            if (ballRadiusYDown >= player2.y && ballCenter <= player2.y + (Player2Height / 3) * 1) {
                ball.increaseSpeedX()
                ball.increaseSpeedY()
            } else if (ballCenter >= (Player2Height / 3) * 2 && ballRadiusYTop <= Player2Height) {
                //acelera ball bateu baixo P2
                ball.increaseSpeedX()
                ball.increaseSpeedY()
            }
        } else if(ball.fast == true){
            //reduz ball bateu meio P2
            if (ballCenter >= (Player2Height / 3) * 1 && ballCenter <= (Player2Height / 3) * 2) {
                ball.decreaseSpeedX()
                ball.decreaseSpeedY()
            }
        }
    }
    //verifica se bateu raquete P1
    if (ballRadiusXLeft <= Player1Width && ballRadiusXLeft >= player1.x - 10 && ballRadiusYDown >= player1.y && ballRadiusYTop <= Player1Height) {
        ball.invertDirectionX()
        if (ball.fast == false) {
            //acelera ball bateu cima P1
            if (ballRadiusYDown >= player1.y && ballCenter <= player1.y + (Player1Height / 3) * 1) {
                ball.increaseSpeedX()
                ball.increaseSpeedY()
            } else if (ballCenter >= player1.y + (Player1Height / 3)*2 && ballCenter <= player1.y + Player1Height) {
                //acelera ball bateu baixo P1
                ball.increaseSpeedX()
                ball.increaseSpeedY()
            }
        } else if (ball.fast == true) {
            //reduz ball bateu meio P1
            if (ballCenter >= (Player1Height / 5) * 1 && ballCenter <= (Player1Height / 5) * 2) {
                ball.decreaseSpeedX()
                ball.decreaseSpeedY()
            }
        }
    }
}
