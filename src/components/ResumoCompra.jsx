import { formatarMoeda } from "../utils/formatarMoeda.js";

function ResumoCompra({ total }) {
  return (
    <section className="resumo-compra">
      <h2>Resumo da compra</h2>
      <p>
        Total: <strong>{formatarMoeda(total)}</strong>
      </p>
    </section>
  );
}

export default ResumoCompra;
