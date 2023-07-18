export function movePlayersDuo(player1, player2, player1Up, player1Down, player2Up, player2Down, screenSizeY){
    if(player1Up && player1.y >= 0){
        player1.y -= player1.speed
    } else if (player1Down && player1.y + player1.height <= screenSizeY){
        player1.y += player1.speed
    }
    if(player2Up && player2.y >= 0){
        player2.y -= player2.speed
    } else if (player2Down && player2.y + player2.height <= screenSizeY){
        player2.y += player2.speed
    }
}
export function movePlayersSolo(ball, opponent, player2, player2Up, player2Down, screenSizeX, screenSizeY){
    
    opponent.followBall(ball, screenSizeX, screenSizeY, player2)
    if(player2Up && player2.y >= 0){
        player2.y -= player2.speed
    } else if (player2Down && player2.y + player2.height <= screenSizeY){
        player2.y += player2.speed
    }
}