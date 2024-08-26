// Day_3
// For/While/If/Else

let a = 0;
let Front=0;
let Back=0;
let e = 0;
let t = 0;
let nT = 0;
let novaTec;


let area = parseInt(prompt('Digite 1 para Front-End ou 2 para Back-End'));

while (a == 0){
    if ( area === 1){
        escolha2 = parseInt(prompt('Digite 1 se deseja aprender React ou 2 para Vue'));
        a=1;
        Front = 1;
    }
    else if(area === 2){
        escolha3 = parseInt(prompt('Digite 1 se deseja aprender C# ou 2 para Java'));
        a=1;
        Back = 1;
    }
    else{
        alert('Uma area não validad foi escolhida');
    }
}

let especialidade = parseInt(prompt('Pensa em focar na area ou virar Fullstack: 1-Area/ 2-Fullstack'));

while (e == 0){

    if ( especialidade === 1){
        // console.log('As variáveis numeroUm e stringUm têm o mesmo valor' 
        // + (numeroUm === stringUm ? ' e tipo' : ', mas tipos diferentes'));
        if (Front === 1){
            alert('vai precisar aprender se aprofundar em' + (escolha2 === 1 ? 'React' : 'Vue') + 'para progedir na area');
             e = 1;
        }
        else if ( Back === 1){
            alert('vai precisar aprender se aprofundar em' + (escolha3 === 1 ? 'C#' : 'Java') + 'para progedir na area');
            e = 1;
        }
    }

    else if(especialidade === 2){
 
        if (Front === 1){
            alert('vai precisar aprender outras linguagens alem de' + (escolha2 === 1 ? 'React' : 'Vue') + 'para se tornar FullStack');
             e = 1;
        }
        else if ( Back === 1){
            alert('vai precisar aprender outras linguagens alem de' + (escolha3 === 1 ? 'C#' : 'Java') + 'para se tornar FullStack');
            e = 1;
        }
    }

    else{
        alert('Uma area não valida foi escolhida');
    }
}



let tecnologias = parseInt(prompt('Tem alguma tecnologia que deseja aprender? 1-sim/ 2-não'));


if ( tecnologias === 1){

        while( nT === 0){

            novaTec =prompt('diga a tecnologia que voce tem interesse:');
            alert('que irado que voce que aprender' + (novaTec));
            nT = parseInt(prompt('se tiver outra tecnologia que quiser falar, digite 0 ou se deseja sair, digite 1'))
        }
    }
else if(area === 2){
    
  alert('Continue estudando o que voce ja esta vendo que você ira progredir em sua carreira');

}



