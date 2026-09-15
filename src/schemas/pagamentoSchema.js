import { z } from "zod";

export const pagamentoSchema = z.object({
  titular: z.string().trim().min(1, "Informe o titular do cartão."),
  cvv: z.string().regex(/^[0-9]{3}$/, "Informe um CVV com 3 dígitos."),
  numeroCartao: z
    .string()
    .transform((valor) => valor.replace(/[ -]/g, ""))
    .pipe(z.string().regex(/^[0-9]{16}$/, "Informe um cartão com 16 dígitos.")),
  validade: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
      "Informe a validade no formato MM/AA, com mês entre 01 e 12.",
    ),
});
