# Checkout React

Projeto educacional de uma interface de finalização de compras, desenvolvido com React para o mini-projeto avaliativo de Front-End React da Semana 07.

## Objetivo

Permitir que o usuário confira os produtos de uma loja de roupas infantis, preencha os dados fictícios de um cartão e receba o resultado da compra. A aplicação reúne carrinho, pagamento e confirmação em um fluxo de navegação sem recarregar a página (SPA).

## Escopo e funcionalidades

- Carrinho fixo com três produtos, exibindo nome, preço unitário, quantidade e subtotal.
- Total calculado a partir dos produtos e apresentado em reais no carrinho e no pagamento.
- Formulário com validação de titular, número do cartão, validade e CVV.
- Simulação assíncrona de pagamento com duração de 1,5 segundo, mensagem de processamento e botão desabilitado durante a espera.
- Telas de sucesso e falha, com ações para voltar ao carrinho ou tentar novamente.
- Estilos com adaptação para telas menores, foco visível e mensagens de erro associadas aos campos.

Os produtos e as quantidades são definidos em `src/data/produtos.js`. O escopo não inclui catálogo, inclusão ou remoção de itens e alteração de quantidades. Toda a simulação ocorre no navegador, sem API, back-end, pagamento real ou persistência dos dados do cartão.

## Telas e navegação

| Rota | Tela | Comportamento |
| --- | --- | --- |
| `/` | Carrinho | Exibe produtos, subtotais e total; “Finalizar compra” abre o pagamento. |
| `/pagamento` | Pagamento | Exibe o total, valida os dados e processa a compra simulada. |
| `/sucesso` | Sucesso | Confirma a aprovação e permite voltar ao carrinho. |
| `/falha` | Falha | Exibe exatamente “tentativa de golpe” e permite retornar ao pagamento. |

## Regras de validação e pagamento

| Campo | Regra |
| --- | --- |
| Titular | Obrigatório; um valor formado apenas por espaços é inválido. |
| Número do cartão | Deve conter 16 dígitos, desconsiderando espaços e hífens. |
| Validade | Formato `MM/AA`, com mês entre `01` e `12`. |
| CVV | Deve conter exatamente três dígitos. |

Dados incompletos ou com formato inválido mantêm o usuário no formulário e exibem mensagens junto aos campos. Não há validação de bandeira, algoritmo de Luhn ou data de vencimento.

Após a validação, a simulação verifica apenas o número do cartão: se todos os 16 dígitos forem iguais, a compra é recusada e o usuário segue para `/falha`. Qualquer outro número com formato válido leva a `/sucesso`. A recusa por dígitos iguais é um resultado da compra, não um erro de preenchimento.

## Tecnologias utilizadas

- **React, JavaScript e JSX:** componentes funcionais e interface declarativa.
- **React Router:** quatro rotas, links e navegação programática com `useNavigate`.
- **React Hook Form, Zod e @hookform/resolvers:** gerenciamento do formulário, normalização do cartão e validação dos campos.
- **HTML semântico e CSS:** estrutura das páginas, estilos responsivos e foco visível.
- **Vite:** ambiente de desenvolvimento e geração da versão de distribuição.
- **ESLint:** análise estática do código.

### Técnicas aplicadas

- Passagem de dados por props para `ItemCarrinho` e `ResumoCompra`.
- Renderização de produtos com `map` e `key` baseada no identificador de cada produto.
- Cálculo do total com `reduce` e formatação com `toLocaleString` em `pt-BR` e moeda `BRL`.
- Estado local com `useState`, encapsulado no custom hook `usePagamento`.
- Processamento com `Promise`, `setTimeout` e `async/await`.
- Eventos de formulário e renderização condicional de erros e feedback.
- Módulos com `import` e `export`, separando páginas, componentes, dados e regras de negócio.
- Rótulos associados aos campos, `aria-invalid`, `aria-describedby`, `role="alert"` e `role="status"` para feedback acessível.

## Como executar

### Pré-requisitos

- Node.js compatível com o Vite instalado.
- npm instalado.
- Git, caso opte por clonar o repositório.

### Instalação e execução

1. Clone o repositório e entre na pasta:

   ```sh
   git clone https://github.com/thaysifreccia/checkout-react.git
   cd checkout-react
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```sh
   npm run dev
   ```

4. Abra no navegador o endereço exibido no terminal.

Se o projeto já estiver baixado, comece pela instalação das dependências dentro da pasta. Não é necessário configurar variáveis de ambiente ou serviços externos.

## Organização do projeto

```text
checkout-react/
├── public/                  # Arquivos públicos
├── src/
│   ├── assets/              # Recursos de imagem
│   ├── components/
│   │   ├── ItemCarrinho.jsx  # Dados e subtotal de um produto
│   │   └── ResumoCompra.jsx  # Total compartilhado entre as telas
│   ├── data/
│   │   └── produtos.js      # Array fixo de produtos
│   ├── hooks/
│   │   └── usePagamento.js  # Estado e processamento da compra
│   ├── pages/
│   │   ├── Carrinho.jsx
│   │   ├── Pagamento.jsx
│   │   ├── Sucesso.jsx
│   │   └── Falha.jsx
│   ├── schemas/
│   │   └── pagamentoSchema.js # Validação com Zod
│   ├── utils/
│   │   ├── calcularTotal.js
│   │   ├── formatarMoeda.js
│   │   └── pagamento.js     # Verificação de dígitos iguais
│   ├── App.jsx              # Definição das rotas
│   ├── App.css              # Estilos das telas e componentes
│   ├── index.css            # Estilos globais
│   └── main.jsx             # Inicialização da aplicação
├── index.html
├── package.json
├── package-lock.json
├── eslint.config.js
└── vite.config.js
```

## Melhorias futuras

- Adicionar testes automatizados para validação, cálculo do total e fluxo de navegação.
- Aplicar máscaras de entrada, preservando a normalização e as regras atuais.
- Ampliar as verificações de acessibilidade e responsividade em diferentes navegadores.
- Explorar o bônus de uma rota dinâmica para compartilhar a apresentação dos resultados de sucesso e falha.

## Links e documentação da entrega

- Repositório: [thaysifreccia/checkout-react](https://github.com/thaysifreccia/checkout-react).
- Trello público com os cartões das tarefas: https://trello.com/invite/b/6aa8b41ede936d98b8d27c02/ATTIb81f35a2ea3b55b6349d5128eb985ba89456D4EE/checkout-react.
