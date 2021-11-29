import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

import { Container, Row } from "react-bootstrap";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";
import CrearPublicacionComponent from "../CrearPublicacion/CrearPublicacion";

const Home = () => {
  return (
    <>
      <NavBar />
      
      <CrearPublicacionComponent/>
      
      <Container className="HomeContent" >
      </Container>
    </>
  );
};

export default Home;