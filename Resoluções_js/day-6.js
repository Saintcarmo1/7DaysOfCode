// Day 6
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
