const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");
let winner
let winnerShow

export function matchPoint(player1, player2, ball, screenSizeX, screenSizeY){
    const ballRadiusXRight = ball.x + ball.size
    const ballRadiusXLeft = ball.x
    //verifica fez ponto
    if (ballRadiusXRight >= tela.width || ballRadiusXLeft <= 0) {
    
        if(ballRadiusXRight >= tela.width){
            player1.score++
            if(player1.score == 10){
                player2.score = 0
                player1.score = 0
                timeShowWinner('player1')
                player2.scoredAPoint()
            }
            player1.scoredAPoint()
        } else {
            player2.score++
            if(player2.score == 10){
                player2.score = 0
                player1.score = 0
                timeShowWinner('player2')
                player1.scoredAPoint()
            }
            player2.scoredAPoint()
        }
        
    
        restartBall(ball, screenSizeX, screenSizeY)
        if (ball.fast) {
            ball.decreaseSpeedX()
            ball.decreaseSpeedY()
        }
        ball.calculateBallDirection();
        ball.calculateBallDirection();
    }
}

function restartBall(ball, screenSizeX, screenSizeY) {
    ball.x = screenSizeX / 2 - ball.size/2
    ball.y = screenSizeY / 2 - ball.size/2
}

export function timeShowWinner(player){
    winnerShow = true
    winner = player
    setTimeout(clearWinner, 4000)
}
function clearWinner(){
    winner = ''
    winnerShow = false
}

export function drawWinner(winnerShow, winner){
    const player1Win = new Image();
    const player2Win = new Image();
    player1Win.src = './images/p1-gan.png';
    player2Win.src = './images/p2-gan.png';
    if(winnerShow && winner == 'player1'){
        pincel.drawImage(player1Win, 15, 13, 500, 80)
    } else if(winnerShow && winner == 'player2'){
        pincel.drawImage(player2Win, 800, 13, 500, 80);
    }
}

export function checkWinner(){
    if(winnerShow){
        drawWinner(winnerShow, winner)
    }
}