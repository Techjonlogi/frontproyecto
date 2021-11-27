import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import './UserRegistry.css';

import { Container, Form, Row, Col, Button } from "react-bootstrap";
import imagenFondo from"../../Pantallas/Login/Imagenes/LoginImagen.jpeg";
import BasicEmail from "../ComponentesVarios/EntradaUsuario/BasicEmail";
import BasicFormInput from "../ComponentesVarios/EntradaUsuario/BasicFormInput";

const UserRegistry = () => {
    return (
        <Container className="UserRegistryContent" fluid>
            <Row>
                <Col className="imageColumn">
                    <img src={ imagenFondo } alt="" id="ImagenFondo" />
                </Col>
                <Col className="formColumn">
                    <Form>
                        <BasicFormInput groupId="nombresGroup" labelId="etiquetaNombres" label="Nombres" placeholder="Introduce tus nombres" />
                        <BasicFormInput groupId="apellidosGroup" labelId="etiquetaApellidos" label="Apellidos" placeholder="Introduce tus apellidos" />
                        <BasicFormInput groupId="nombreUsuarioGroup" labelId="etiquetaNombreUsuario" label="Nombre de Usuario" placeholder="Introduce un nombre de usuario" />
                        <BasicEmail />
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default UserRegistry;