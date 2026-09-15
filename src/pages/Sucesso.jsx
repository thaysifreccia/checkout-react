import { Link } from "react-router";

function Sucesso() {
  return (
    <main>
      <h1>Compra aprovada</h1>
      <p>Sua compra foi realizada com sucesso.</p>
      <Link className="acao-principal" to="/">
        Voltar ao carrinho
      </Link>
    </main>
  );
}

export default Sucesso;
