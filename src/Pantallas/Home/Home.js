import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

import { Container } from "react-bootstrap";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";
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