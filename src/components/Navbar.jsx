import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Inicio</NavLink>
      <NavLink to="/quiensoy">Quiensoy</NavLink>
      <NavLink to="/proyectos">Proyectos</NavLink>
      <NavLink to="/tecnologias">Tecnologias</NavLink>
      <NavLink to="/empresascolaboradoras">Empresas Colaboradoras</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
    </nav>
  );
}

export default Navbar;