import 'bootstrap/dist/css/bootstrap.css';
import './UserRegistry.css';

import { Formik } from "formik";
import { Container, Form, Row, Col } from "react-bootstrap";
import ImagenFondo from"../../Pantallas/Login/Imagenes/LoginImagen.jpeg";
import BasicFormEmail from "../ComponentesVarios/EntradaUsuario/BasicFormEmail";
import BasicFormInput from "../ComponentesVarios/EntradaUsuario/BasicFormInput";
import BasicFormPassword from "../ComponentesVarios/EntradaUsuario/BasicFormPassword";
import BasicDropdownButton from "../ComponentesVarios/Botones/BasicDropdownButton";
import BasicButton from "../ComponentesVarios/Botones/BasicButton";

const UserRegistry = () => {
    return (
        <Formik
            initialValues= { {
                nombres: '',
                apellidos: '',
                nombre_usuario: '',
                correo_electronico: '',
                contrasena: '',
                confirmar_contrasena: ''
            } }
        >
            { formik => (
                <Container className="UserRegistryContent" fluid>
                    { console.log(formik.values) }
                <Row>
                    <Col className="imageColumn">
                        <img src={ ImagenFondo } alt="" id="ImagenFondo" />
                    </Col>
                    <Col className="formColumn">
                        <Form id="UserInputForm">
                            <Form.Label id="etiquetaPagina">Registro de Usuario</Form.Label>
                            <BasicFormInput labelId="etiquetaNombres" controlId="controlNombres" label="" name="nombres" placeholder="Nombres"/>
                            <BasicFormInput labelId="etiquetaApellidos" controlId="controlApellidos" label="" name="apellidos" placeholder="Apellidos" />
                            <BasicDropdownButton dropdownId="BotonDropdown" title="Tipo de Usuario" items={ [ 'Artista', 'Buscador de Talento' ] } />
                            <BasicFormInput labelId="etiquetaNombreUsuario" controlId="controlNombreUsuario" label="" name="nombre_usuario" placeholder="Nombre de Usuario" />
                            <BasicFormEmail labelId="etiquetaEmail" label="" name="correo_electronico" placeholder="Correo Electrónico"/>
                            <BasicFormPassword labelId="etiquetaContrasena" label="" name="contrasena" placeholder="Contraseña"/>
                            <BasicFormPassword labelId="etiquetaConfirmarContrasena" label="" name="confirmar_contrasena" placeholder="Contraseña"/>
                            <BasicButton buttonId="BotonRegistro" content="Crear Cuenta" />
                        </Form>
                    </Col>
                </Row>
            </Container>
            ) }
        </Formik>
    );
};

export default UserRegistry;