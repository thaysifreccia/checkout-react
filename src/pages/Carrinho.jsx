import { Link } from "react-router";
import ItemCarrinho from "../components/ItemCarrinho.jsx";
import ResumoCompra from "../components/ResumoCompra.jsx";
import { produtos } from "../data/produtos.js";
import { calcularTotal } from "../utils/calcularTotal.js";

function Carrinho() {
  const total = calcularTotal(produtos);

  return (
    <main>
      <h1>Carrinho</h1>
      <p>Confira seu carrinho e finalize sua compra.</p>
      <ul className="lista-produtos">
        {produtos.map((produto) => {
          return <ItemCarrinho key={produto.id} produto={produto} />;
        })}
      </ul>
      <ResumoCompra total={total} />
      <Link className="acao-principal" to="/pagamento">
        Finalizar compra
      </Link>
    </main>
  );
}

export default Carrinho;
