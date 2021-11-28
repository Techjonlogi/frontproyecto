import React from "react";
import { Container, Row } from "react-bootstrap";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";

const Home = () => {
  return (
    <Container className="HomeContent" fluid>
      <Row>
        <NavBar />
      </Row>
      <Row></Row>
    </Container>
  );
};
// cada componente va aqui
// const DefinirComponente =(cosas)=> {
//   switch

// }
//handleclick

export default Home;