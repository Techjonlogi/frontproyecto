import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import './UserRegistry.css';

import { Container, Form, Row, Col, Button } from "react-bootstrap";
import imagenFondo from"../../Pantallas/Login/Imagenes/LoginImagen.jpeg";
import BasicEmail from "../ComponentesVarios/EntradaUsuario/BasicEmail";

const UserRegistry = () => {
    return (
        <Container className="UserRegistryContent" fluid>
            <Row>
                <Col className="imageColumn">
                    <img src={ imagenFondo } alt="" id="ImagenFondo" />
                </Col>
                <Col className="formColumn">
                    <Form>
                        <BasicEmail />
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default UserRegistry;