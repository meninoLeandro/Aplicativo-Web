import { NavLink, Routes, Route } from "react-router";
import Inicio from "./pages/Inicio.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Cursos from "./pages/Cursos.jsx";

export default function App() {
  return (
    <div className="container">
      <header className="topbar">
        <NavLink className="brand" to="/" end>
          <span className="brand-mark" aria-hidden="true">V</span>
          <span>VerdeEdu <b>Cursos</b></span>
        </NavLink>
        <nav aria-label="Menu principal">
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/cursos">Cursos</NavLink>
          <NavLink className="nav-button" to="/cadastro">Inscreva-se</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="*" element={<p>Página não encontrada.</p>} />
        </Routes>
      </main>
    </div>
  );
}