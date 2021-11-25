import React from "react";
import { Nav, Button, NavItem, Card } from "react-bootstrap";
import "./Home.css";
import NavBar from "../ComponentesVarios/NavBar";

const Home = () => {
  return (
    <>
    <NavBar>
    </NavBar>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" alt="Aqui va la imagen de la publicacion"/>
        <Card.Body>
          <Card.Title>Titulo De Publicacion</Card.Title>
          <Card.Text>
            Aqui va la descripcion de la publicacion
          </Card.Text>
          <Button variant="primary">Ver publicacion</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Home;
