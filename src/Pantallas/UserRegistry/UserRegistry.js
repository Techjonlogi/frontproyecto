import 'bootstrap/dist/css/bootstrap.css';
import './UserRegistry.css';

import { Formik } from "formik";
import { Container, Form, Row, Col } from "react-bootstrap";
import Api from "../ComponentesVarios/Utilidades/Api/Api";
import ConfigNoAuth from "../ComponentesVarios/Utilidades/Api/ApiConfigurations";
import Endpoints from "../ComponentesVarios/Utilidades/Api/ApiEndpoints";
import RegisterInputSchema from "../ComponentesVarios/Utilidades/ValidationSchemas/RegisterInputSchema";
import ImagenFondo from "../../Pantallas/Login/Imagenes/LoginImagen.jpeg";
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
            validationSchema={ RegisterInputSchema }
            onSubmit={ async ( values ) => {
                const data = {
                    nombres: values.nombres,
                    apellidos: values.apellidos,
                    nombre_usuario: values.nombre_usuario,
                    contrasena: values.contrasena,
                    correo_electronico: values.correo_electronico
                };

                await Api.post(
                    Endpoints.usuarios,
                    data,
                    ConfigNoAuth
                ).then( ( response ) => {
                    console.log( response.data );
                } ).catch( ( e ) => {
                    console.log( e.response.status );
                    console.log( e.response.data );
                } );
            } }
        >
            { formik => (
                <Container className="UserRegistryContent" fluid>
                <Row>
                    <Col className="imageColumn">
                        <img src={ ImagenFondo } alt="" id="ImagenFondo" />
                    </Col>
                    <Col className="formColumn">
                        <Form id="UserInputForm" onSubmit={ formik.handleSubmit }>
                            <Form.Label id="etiquetaPagina">Registro de Usuario</Form.Label>
                            <BasicFormInput labelId="etiquetaNombres" controlId="controlNombres" label="" name="nombres" placeholder="Nombres"/>
                            <BasicFormInput labelId="etiquetaApellidos" controlId="controlApellidos" label="" name="apellidos" placeholder="Apellidos" />
                            <BasicDropdownButton dropdownId="BotonDropdown" title="Tipo de Usuario" items={ [ 'Artista', 'Buscador de Talento' ] } />
                            <BasicFormInput labelId="etiquetaNombreUsuario" controlId="controlNombreUsuario" label="" name="nombre_usuario" placeholder="Nombre de Usuario" />
                            <BasicFormEmail labelId="etiquetaEmail" label="" name="correo_electronico" placeholder="Correo Electrónico"/>
                            <BasicFormPassword labelId="etiquetaContrasena" label="" name="contrasena" placeholder="Contraseña"/>
                            <BasicFormPassword labelId="etiquetaConfirmarContrasena" label="" name="confirmar_contrasena" placeholder="Confirmar Contraseña"/>
                            <BasicButton buttonId="BotonRegistro" content="Crear Cuenta" buttonType="submit"/>
                        </Form>
                    </Col>
                </Row>
            </Container>
            ) }
        </Formik>
    );
};

export default UserRegistry;