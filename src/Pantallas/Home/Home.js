import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

import { Container, Row } from "react-bootstrap";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Container></Container>
    </>
  );
};

export default Home;