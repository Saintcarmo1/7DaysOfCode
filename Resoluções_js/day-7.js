// Day 7
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


function calculadora(){
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