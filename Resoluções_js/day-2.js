// Day 2 
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