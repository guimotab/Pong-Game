export default function readButtons(tecla) {
    let subirP2 = true;
    let descerP2 = true;
    let subirP1 = true;
    let descerP1 = true;

    Player2.y + Player2.comprimentoJogador >= tela.height ? descerP2 = false : posicaoCima = true;
    Player2.y <= 0 ? subirP2 = false : posicaoBaixo = true;

    Player1.y + Player1.comprimentoJogador >= tela.height ? descerP1 = false : posicaoCima = true;
    Player1.y <= 0 ? subirP1 = false : posicaoBaixo = true;

    if (subirP2) {
        if (tecla.keyCode == cima) {
            Player2.y -= 30;
        }
    }
    if (descerP2) {
        if (tecla.keyCode == baixo) {
            Player2.y += 30;
        }
    }
    if (subirP1) {
        if (tecla.keyCode == teclaW) {
            Player1.y -= 30;
        }
    }
    if (descerP1) {
        if (tecla.keyCode == teclaS) {
            Player1.y += 30;
        }
    }
    return false; //não movimenta a tela quando clica no botão de subir ou descer
}