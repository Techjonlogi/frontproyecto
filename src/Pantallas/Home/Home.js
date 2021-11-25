import React from "react";
import { Nav, Button, NavItem, Card } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Nav
        id="menuPrincipal"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Logo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Juegos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Conceptual</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-2">Cine</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Danza</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Pintura</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Musica</Nav.Link>
        </Nav.Item>

        <NavItem>
          <div>
            <a href="#">
              <small className="reset">Login</small>
            </a>
          </div>
        </NavItem>
        <NavItem>
          <div>
            <a href="#">
              <small className="reset ml-2">Registrate</small>
            </a>
          </div>
        </NavItem>
      </Nav>

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
