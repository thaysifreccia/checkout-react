import { Routes, Route } from "react-router";
import "./App.css";
import Carrinho from "./pages/Carrinho.jsx";
import Pagamento from "./pages/Pagamento.jsx";
import Sucesso from "./pages/Sucesso.jsx";
import Falha from "./pages/Falha.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Carrinho />} />
      <Route path="/pagamento" element={<Pagamento />} />
      <Route path="/sucesso" element={<Sucesso />} />
      <Route path="/falha" element={<Falha />} />
    </Routes>
  );
}

export default App;
