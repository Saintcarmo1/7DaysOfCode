// Day 4
let chute = parseInt(prompt('Chute o número secreto:'));
let numeroAleatorio = Math.floor(Math.random() * 10);
let tentativas = 0;
let acertou = 0;
let chance = 3;

while (acertou === 0) {
    if (numeroAleatorio === chute) {
        if (tentativas === 0) {
            alert('Parabéns!!! Você acertou o número secreto de primeira.');
        }
        acertou = 1;
    } else if (numeroAleatorio != chute) {
        for (tentativas = 1; tentativas <= 3; tentativas++) {
            chance--;
            alert(numeroAleatorio);

            if (chute === numeroAleatorio) {
                alert('Parabéns!!! Você acertou faltando ' + chance + ' tentativa(s).');
                acertou = 1;
                break;
            }

            if (chance > 0) {
                alert('Não acertou... Mas não desanime, você ainda tem ' + chance + ' chance(s).');
                chute = parseInt(prompt('Chute o número secreto novamente:'));
            }

            if (chance === 0) {
                alert('Errou! Você perdeu todas as chances. O número secreto era: ' + numeroAleatorio);
                acertou = 1;
                break;
            }
        }
    }
}

