import React from "react"
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import imagenFondo from"../../Pantallas/Login/Imagenes/LoginImagen.jpeg"
import 'bootstrap/dist/css/bootstrap.css';
import './UserRegistry.css';

const UserRegistry = () => {
    return (
        <Container className="UserRegistryContent" fluid>
            <Col className="formColumn">

            </Col>
            <Col className="imageColumn">
                <img src={ imagenFondo } alt="" id="ImagenFondo" />
            </Col>
        </Container>
    );
};

export default UserRegistry;