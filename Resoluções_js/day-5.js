// Day 5
let listas = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: []
};

let adicionar;
let produto;
let categoria;

let i = 0;
while (i === 0) {
    adicionar = prompt('Deseja adicionar uma comida na sua lista de compras? (sim/não)');
    
    if (adicionar === 'sim') {
        produto = prompt('Diga a comida que deseja inserir:');
        categoria = prompt('Essa comida se encontra em quais das seguinte categorias: frutas, laticinios, congelados, doces?');
        
        if (listas[categoria]) {
            listas[categoria].push(produto);
        } else {
            alert('Categoria inválida. Tente novamente.');
        }
    }
    
    if (adicionar === 'não') {
        alert('Aqui está sua lista de compras:\n' +
            // Join converte os elementos para uma unica string separados por um delimitador
            // O delimetador nesse caso se trata do (', ')
            // Sem join(): ["maçã", "banana", "laranja"]
            // Com join(', '): "maçã, banana, laranja"
              'Frutas: ' + listas.frutas.join(', ') + '\n' +
              'Laticínios: ' + listas.laticinios.join(', ') + '\n' +
              'Comida Congelada: ' + listas.congelados.join(', ') + '\n' +
              'Doces: ' + listas.doces.join(', ') + '\n');
        i = 1;
    }
}
