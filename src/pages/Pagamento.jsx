import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ResumoCompra from "../components/ResumoCompra.jsx";
import { produtos } from "../data/produtos.js";
import { calcularTotal } from "../utils/calcularTotal.js";
import { pagamentoSchema } from "../schemas/pagamentoSchema.js";
import { usePagamento } from "../hooks/usePagamento.js";

function Pagamento() {
  const navigate = useNavigate();
  const { processando, executarPagamento } = usePagamento();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(pagamentoSchema),
  });

  const total = calcularTotal(produtos);

  async function enviarFormulario(dados) {
    if (processando) {
      return;
    }

    const resultado = await executarPagamento(dados.numeroCartao);

    if (resultado) {
      navigate("/sucesso");
    } else {
      navigate("/falha");
    }
  }

  return (
    <main>
      <h1>Pagamento</h1>
      <p>Confira o resumo da compra antes de efetuar o pagamento.</p>

      <ResumoCompra total={total} />

      <form
        className="formulario-pagamento"
        onSubmit={handleSubmit(enviarFormulario)}
      >
        <h2>Dados do cartão</h2>
        <p>Preencha com dados fictícios.</p>

        <div className="campo-formulario">
          <label htmlFor="titular">Titular</label>
          <input
            id="titular"
            type="text"
            aria-invalid={errors.titular ? true : false}
            aria-describedby={errors.titular ? "titular-erro" : undefined}
            {...register("titular")}
          />
          {errors.titular && (
            <p id="titular-erro" role="alert">
              {errors.titular.message}
            </p>
          )}
        </div>

        <div className="campo-formulario">
          <label htmlFor="numeroCartao">Número do cartão</label>
          <input
            id="numeroCartao"
            type="text"
            inputMode="numeric"
            aria-invalid={errors.numeroCartao ? true : false}
            aria-describedby={
              errors.numeroCartao ? "numeroCartao-erro" : undefined
            }
            {...register("numeroCartao")}
          />
          {errors.numeroCartao && (
            <p id="numeroCartao-erro" role="alert">
              {errors.numeroCartao.message}
            </p>
          )}
        </div>

        <div className="campo-formulario">
          <label htmlFor="validade">Validade (MM/AA)</label>
          <input
            id="validade"
            type="text"
            placeholder="MM/AA"
            aria-invalid={errors.validade ? true : false}
            aria-describedby={errors.validade ? "validade-erro" : undefined}
            {...register("validade")}
          />
          {errors.validade && (
            <p id="validade-erro" role="alert">
              {errors.validade.message}
            </p>
          )}
        </div>

        <div className="campo-formulario">
          <label htmlFor="cvv">CVV</label>
          <input
            id="cvv"
            type="text"
            inputMode="numeric"
            aria-invalid={errors.cvv ? true : false}
            aria-describedby={errors.cvv ? "cvv-erro" : undefined}
            {...register("cvv")}
          />
          {errors.cvv && (
            <p id="cvv-erro" role="alert">
              {errors.cvv.message}
            </p>
          )}
        </div>

        <p role="status">{processando ? "Processando compra..." : ""}</p>
        <button className="acao-principal" type="submit" disabled={processando}>
          Pagar
        </button>
      </form>
    </main>
  );
}

export default Pagamento;
