import ResumoCompra from "../components/ResumoCompra.jsx";
import { produtos } from "../data/produtos.js";
import { calcularTotal } from "../utils/calcularTotal.js";

function Pagamento() {
  const total = calcularTotal(produtos);

  return (
    <main>
      <h1>Pagamento</h1>
      <p>Confira o resumo da compra antes de efetuar o pagamento.</p>
      <ResumoCompra total={total} />
    </main>
  );
}

export default Pagamento;
