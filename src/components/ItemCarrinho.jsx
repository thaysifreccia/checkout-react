import { formatarMoeda } from "../utils/formatarMoeda.js"

function ItemCarrinho({ produto }) {
    const subtotal = produto.precoUnitario * produto.quantidade
    
    return (
        <li>
            <h2>{produto.nome}</h2>
            <p>Preço unitário: {formatarMoeda(produto.precoUnitario)}</p>
            <p>Quantidade: {produto.quantidade}</p>
            <p>Subtotal: {formatarMoeda(subtotal)}</p>
        </li>
    )
}

export default ItemCarrinho