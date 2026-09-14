import ItemCarrinho from "../components/ItemCarrinho.jsx";
import ResumoCompra from "../components/ResumoCompra.jsx";
import { produtos } from "../data/produtos.js";

function Carrinho() {
    const total = produtos.reduce((acumulador, produto) => {
        return acumulador + (produto.precoUnitario * produto.quantidade)
    }, 0)
  return (
    <main>
      <h1>Carrinho</h1>
      <p>Confira seu carrinho e finalize sua compra.</p>
      <ul>
        {produtos.map((produto) => {
            return <ItemCarrinho key={produto.id} produto={produto} />
        })}
      </ul>
      <ResumoCompra total={total} />
    </main>
  )
}

export default Carrinho
