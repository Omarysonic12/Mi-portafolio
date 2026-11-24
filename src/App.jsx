import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Box, Button, Container, Toolbar, Typography } from "@mui/material";

import Navbar from "./components/Navbar";

function Inicio() {
  return <h1>Página de Inicio</h1>

  
}

function Quiensoy() {
  return <h1>Sobre mí</h1>;
}

function Proyectos() {
  return <h1>Mis proyectos</h1>;
}

function Tecnologias() {
  return <h1>hola</h1>;
}

function Empresascolaboradoras(){
  return <h1>puta</h1>;
}

function Contacto() {
  return <h1>Contacto</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quiensoy" element={<Quiensoy/>} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/tecnologias" element={<Tecnologias/> }/>
        <Route path="/empresascolaboradoras" element={<Empresascolaboradoras/>}/>
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;