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

//  //verifica se a entrada e um numero convertendo com number
//   e1 = verifica_numero(entrada1);
//   e2 = verifica_numero(entrada2);



//  if(Number.isNaN(e1)){
//     if(Number.isNaN(e2)){
//         if( entrada1 == entrada1)
//         alert('Ambos os dados não de tipo string.')
        
//     }
//  }


