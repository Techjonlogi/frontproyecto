import 'bootstrap/dist/css/bootstrap.css';
import './UserRegistry.css';
import { Formik } from "formik";
import { Container, Form, Row, Col } from "react-bootstrap";
import Api from "../ComponentesVarios/Utilidades/Api/Api";
import ConfigNoAuth from "../ComponentesVarios/Utilidades/Api/Configurations/ConfigNoAuth";
import Endpoints from "../ComponentesVarios/Utilidades/Api/ApiEndpoints";
import RegisterInputSchema from "../ComponentesVarios/Utilidades/ValidationSchemas/RegisterInputSchema";
import ImagenFondo from "../../Pantallas/Login/Imagenes/LoginImagen.jpeg";
import BasicFormEmail from "../ComponentesVarios/EntradaUsuario/BasicFormEmail";
import BasicFormInput from "../ComponentesVarios/EntradaUsuario/BasicFormInput";
import BasicFormPassword from "../ComponentesVarios/EntradaUsuario/BasicFormPassword";
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
                    if( response.status === 201 || response.status === 200 ) {
                        window.location.replace( "http://localhost:3000/Login" );
                    }
                } ).catch( ( e ) => {
                    if( e.response.status === 429 ) {
                        alert( "Ya no puedes registrar otro usuario hoy." );
                    } else if( e.response.status === 409 ) {
                        alert( "El nombre de usuario ya existe." );
                    } else if( e.response.status === 400 ) {
                        alert( "Información inválida." );
                    } else {
                        alert( "Ocurrio un error con el servidor. Inténtelo más tarde" );
                    }
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