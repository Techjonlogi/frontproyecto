import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css';

import { Container, Row } from "react-bootstrap";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";

const Home = () => {
  return (
    <NavBar />
    // <Container className="HomeContent" fluid>
    //   <Row className="NavigationBarRow">
    //     <NavBar />
    //   </Row>
    //   <Row></Row>
    // </Container>
  );
};
// cada componente va aqui
// const DefinirComponente =(cosas)=> {
//   switch

// }
//handleclick

export default Home;