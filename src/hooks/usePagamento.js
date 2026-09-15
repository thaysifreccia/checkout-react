import { useState } from "react";
import { temTodosDigitosIguais } from "../utils/pagamento.js";

export function usePagamento() {
  const [processando, setProcessando] = useState(false);

  async function executarPagamento(numeroCartao) {
    setProcessando(true);

    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 1500);
      });

      const aprovado = !temTodosDigitosIguais(numeroCartao);

      return aprovado;
    } finally {
      setProcessando(false);
    }
  }

  return { processando, executarPagamento };
}
