import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

import { Container } from "react-bootstrap";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";
import CrearPublicacionComponent from "../CrearPublicacion/CrearPublicacion";
import ComponenteVerPublicacion from "../VerPublicacionEspecifica/VerPublicacionEspecifica"
import EditarPublicacion from "../EditarPublicacion/EditarPublicacion";

const Home = () => {
  return (
    <>
      <NavBar />
      
      
      <EditarPublicacion></EditarPublicacion>
      <Container className="HomeContent" >
      </Container>
    </>
  );
};

export default Home;