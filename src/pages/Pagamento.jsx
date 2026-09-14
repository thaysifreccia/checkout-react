import { useForm } from "react-hook-form";
import ResumoCompra from "../components/ResumoCompra.jsx";
import { produtos } from "../data/produtos.js";
import { calcularTotal } from "../utils/calcularTotal.js";

function Pagamento() {
  const { register, handleSubmit } = useForm();

  const total = calcularTotal(produtos);

  function enviarFormulario(dados) {
    console.log("Dados do formulario:", dados);
  }

  return (
    <main>
      <h1>Pagamento</h1>
      <p>Confira o resumo da compra antes de efetuar o pagamento.</p>
      <ResumoCompra total={total} />
      <form onSubmit={handleSubmit(enviarFormulario)}>
        <h2>Dados do cartão</h2>
        <p>Preencha com dados fictícios.</p>

        <div>
          <label htmlFor="titular">Titular</label>
          <input id="titular" type="text" {...register("titular")} />
        </div>

        <div>
          <label htmlFor="numeroCartao">Número do cartão</label>
          <input
            id="numeroCartao"
            type="text"
            inputMode="numeric"
            {...register("numeroCartao")}
          />
        </div>

        <div>
          <label htmlFor="validade">Validade (MM/AA)</label>
          <input
            id="validade"
            type="text"
            placeholder="MM/AA"
            {...register("validade")}
          />
        </div>

        <div>
          <label htmlFor="cvv">CVV</label>
          <input
            id="cvv"
            type="text"
            inputMode="numeric"
            {...register("cvv")}
          />
        </div>

        <button type="submit">Pagar</button>
      </form>
    </main>
  );
}

export default Pagamento;
