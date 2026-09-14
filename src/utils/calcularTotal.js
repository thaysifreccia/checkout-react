export function calcularTotal(produtos) {
    return produtos.reduce((acumulador, produto) => {
        return acumulador + produto.precoUnitario * produto.quantidade;
    }, 0);
}