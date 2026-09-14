# Checkout React

Projeto educacional desenvolvido para a avaliação do curso de desenvolvimento web com React.

## Objetivo

Construir uma aplicação de checkout com carrinho fixo, formulário de pagamento fictício e telas de sucesso e falha. A compra será simulada no navegador, sem integração com serviços de pagamento.

## Estado atual

A estrutura inicial foi criada com React e Vite. A tela de apresentação está preparada; as funcionalidades do checkout serão implementadas nas próximas etapas.

## Tecnologias utilizadas

- React
- JavaScript e JSX
- HTML e CSS
- Vite
- ESLint

## Como executar

É necessário ter Node.js e npm instalados.

No terminal, dentro da pasta do projeto:

1. Execute `npm install` para instalar as dependências.
2. Execute `npm run dev` para iniciar o ambiente de desenvolvimento.
3. Abra no navegador o endereço informado no terminal.

## Outros comandos

- `npm run lint`: verifica o código com ESLint.
- `npm run build`: gera a versão de distribuição na pasta `dist`.
- `npm run preview`: permite visualizar localmente a versão gerada pelo build.

## Organização inicial

- `src/main.jsx`: inicializa a aplicação React.
- `src/App.jsx`: define o componente principal.
- `src/index.css`: contém os estilos globais.
- `src/App.css`: contém os estilos do componente principal.
- `public/`: contém arquivos públicos.