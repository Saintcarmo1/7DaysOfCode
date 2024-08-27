let i=0;
let numero1;
let numero2;


function somar(x,y){return x+y;}
function subtrair(x,y){return x-y;}
function multiplicar(x,y){return x*y;}
function dividir (x,y){return x/y;}

// Mapeamento de operações para funções
const operacoes = {
    'soma': somar,
    'subtração': subtrair,
    'multiplicação': multiplicar,
    'divisão': dividir
};


function day1() {

    let entrada1 = parseInt(prompt("Digite um número no primeiro: "));
    let t = 1;
    let entrada2;

    while (t != 0) {
        let verifica = parseInt(prompt("Digite 1 para a próxima variável ser string ou 2 para ser int"));
    
        if (verifica == 1) {     
            alert('teste1');
            entrada2 = prompt("Digite a segunda variável de comparação.");
            t = 0;
        } 
        else if (verifica == 2) {
            alert('teste2');
            entrada2 = parseInt(prompt('Digite o segundo número de comparação'));
            
            // Verifica se entrada2 é NaN
            if (isNaN(entrada2)) {
                alert("Entrada inválida. Por favor, insira um número.");
                continue; // Recomeça o loop sem mudar 't'
            }
            
            t = 0;
        } 
        else {
            alert('teste3');
            alert('Digite uma das duas opções apresentadas.');
        }
    }

    if (entrada1 == entrada2) {
        alert('A variável 1 e a variável 2 têm o mesmo valor' + (entrada1 === entrada2 ? ' e tipo' : ', mas tipos diferentes'));
    } 
    else {
        alert('As variáveis não têm o mesmo valor' + (typeof entrada1 === typeof entrada2 ? ', mas são do mesmo tipo' : ', e têm tipos diferentes'));
    }

}


function day2(){

    let Name= prompt ("Qual o seu nome? ");

    let anos = parseInt(prompt('Quantos anos você tem? '));

    let Linguagem_programcao= prompt("Qual linguagem de programação você está estudando? ");

    alert (`Olá ${Name} , você tem ${anos} anos e já está aprendendo ${Linguagem_programcao} !`) 

    let estudar = parseInt(prompt(`Você gosta de estudar ${Linguagem_programcao}? Responda com o número 1 para SIM ou 2 para NÃO.`));

    if(estudar == 1){
        alert(' Muito bom! Continue estudando e você terá muito sucesso.')
    }else{
        alert(' Ahh que pena... Já tentou aprender outras linguagens?')
    }
}

function day3() {

    let area = parseInt(prompt('Digite 1 para Front-End ou 2 para Back-End'));
    let especialidade, escolha, stack = '';

    while (area !== 1 && area !== 2) {
        alert('Uma área não válida foi escolhida');
        area = parseInt(prompt('Digite 1 para Front-End ou 2 para Back-End'));
    }

    escolha = parseInt(prompt(`Digite 1 se deseja aprender ${area === 1 ? 'React' : 'C#'} ou 2 para ${area === 1 ? 'Vue' : 'Java'}`));
    especialidade = parseInt(prompt('Pensa em focar na área ou virar Fullstack: 1-Área/ 2-Fullstack'));

    let mensagem = `Vai precisar se aprofundar em ${escolha === 1 ? (area === 1 ? 'React' : 'C#') : (area === 1 ? 'Vue' : 'Java')}`;
    mensagem += especialidade === 2 ? ' e aprender outras linguagens para se tornar FullStack' : ' para progredir na área';
    alert(mensagem);

    if (parseInt(prompt('Tem alguma tecnologia que deseja aprender? 1-sim/ 2-não')) === 1) {
        do {
            stack = prompt('Diga a tecnologia que você tem interesse:');
            alert(`Que irado que você quer aprender ${stack}!`);
        } while (parseInt(prompt('Se tiver outra tecnologia que quiser falar, digite 0 ou se deseja sair, digite 1')) === 0);
    } else {
        alert('Continue estudando o que você já está vendo que você irá progredir em sua carreira.');
    }
}

function day4(){
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
}

function day5() {
    let listas = {
        frutas: [],
        laticinios: [],
        congelados: [],
        doces: []
    };

    let continuar = true;

    while (continuar) {
        let adicionar = prompt('Deseja adicionar uma comida na sua lista de compras? (sim/não)');
        
        if (adicionar === 'sim') {
            let produto = prompt('Diga a comida que deseja inserir:');
            let categoria = prompt('Essa comida se encontra em quais das seguinte categorias: frutas, laticinios, congelados, doces?');
            
            if (listas[categoria]) {
                listas[categoria].push(produto);
            } else {
                alert('Categoria inválida. Tente novamente.');
            }
        } else if (adicionar === 'não') {
            alert('Aqui está sua lista de compras:\n' +
                  'Frutas: ' + listas.frutas.join(', ') + '\n' +
                  'Laticínios: ' + listas.laticinios.join(', ') + '\n' +
                  'Comida Congelada: ' + listas.congelados.join(', ') + '\n' +
                  'Doces: ' + listas.doces.join(', ') + '\n');
            continuar = false;
        } else {
            alert('Resposta inválida. Tente novamente.');
        }
    }
}

function day6(){
let lista_Compras = [];
let adicionar;
let produto;
let index;
let i = 0;

while (i === 0) {
    adicionar = prompt('Deseja adicionar uma comida na sua lista de compras? (sim/não)\n' + 
        'Caso deseje remover algo da lista basta digitar remover. ');

    // Mostra a lista atual antes de pedir uma ação
    alert('Lista atual: ' + lista_Compras.join(', '));

    if (adicionar === 'sim') {
        produto = prompt('Diga a comida que deseja inserir:');
        lista_Compras.push(produto);   
    } 

    if (adicionar === 'remover') {
        let remover = prompt('Diga o nome do produto que deseja remover da lista:');
        let produtoRemovido = false;
        
        while ((index = lista_Compras.indexOf(remover)) !== -1) {
            lista_Compras.splice(index, 1);
            produtoRemovido = true;  // Marca que pelo menos um produto foi removido
        }
        
        if (!produtoRemovido) {
            alert('Não tem esse produto na lista em questão');
        } else {
            alert('Todos os produtos removidos com sucesso!');
        }
    }

    if (adicionar === 'não') {
        alert('Aqui está sua lista de compras:\n' + lista_Compras.join(', ') + '\n');
        i = 1;
    }
}
}





function day7(){
    while ( i === 0){
        let escolher = prompt('Digite qual das seguintes operações que voce deseja fazer:\n' +
                'soma\n'+ 
                'subtração\n'+ 
                'multiplicação\n'+
                'divisão\n ' + 
                'sair');
                if (escolher === 'sair') {
                    alert('Até a próxima');
                    i = 1;
                    continue; // Volta para o início do loop
                }
        
                if (operacoes[escolher]) {
                    numero1 = parseInt(prompt('Digite o primeiro número:'), 10);
                    numero2 = parseInt(prompt('Digite o segundo número:'), 10);
                    alert(operacoes[escolher](numero1, numero2));
                } else {
                    alert('Operação inválida. Tente novamente.');
                }
            }
}



    

//  //verifica se a entrada e um numero convertendo com number
//   e1 = verifica_numero(entrada1);
//   e2 = verifica_numero(entrada2);



//  if(Number.isNaN(e1)){
//     if(Number.isNaN(e2)){
//         if( entrada1 == entrada1)
//         alert('Ambos os dados não de tipo string.')
        
//     }
//  }


