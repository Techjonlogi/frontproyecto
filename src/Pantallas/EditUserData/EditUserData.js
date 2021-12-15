import 'bootstrap/dist/css/bootstrap.css';
import './EditUserData.css';
import { Formik } from "formik";
import { Container, Form, Col, Row } from "react-bootstrap";
import { ConvertToBase64 } from "../ComponentesVarios/Utilidades/UtilityFunctions";
import Api from "../ComponentesVarios/Utilidades/Api/Api";
import ConfigWithAuth from "../ComponentesVarios/Utilidades/Api/Configurations/ConfigWithAuth";
import Endpoints from "../ComponentesVarios/Utilidades/Api/ApiEndpoints";
import EditUserDataSchema from "../ComponentesVarios/Utilidades/ValidationSchemas/EditUserDataSchema";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";
import BasicFormInput from "../ComponentesVarios/EntradaUsuario/BasicFormInput";
import BasicFormEmail from "../ComponentesVarios/EntradaUsuario/BasicFormEmail";
import BasicFormPassword from "../ComponentesVarios/EntradaUsuario/BasicFormPassword";
import BasicFormFileInput from "../ComponentesVarios/EntradaUsuario/BasicFormFileInput";
import BasicButton from "../ComponentesVarios/Botones/BasicButton";

const EditUserData = () => {
    return (
        <Formik
            initialValues= { {
                nombres: '',
                apellidos: '',
                nombre_usuario: '',
                correo_electronico: '',
                contrasena: '',
                confirmar_contrasena: '',
                archivo: ''
            } }
            validationSchema= { EditUserDataSchema }
            onSubmit= { async ( values ) => {
                const data = {
                    nombres: values.nombres,
                    apellidos: values.apellidos,
                    nombre_usuario: values.nombre_usuario,
                    contrasena: values.contrasena,
                    correo_electronico: values.correo_electronico,
                    foto_perfil: ( await ConvertToBase64( values.archivo ) )
                };

                await Api.put(
                    Endpoints.usuarios + "/" + localStorage.getItem( "KeyID" ),
                    data,
                    ConfigWithAuth
                ).then( ( response ) => {
                    if( response.status === 201 || response.status === 200) {
                        window.location.replace( "http://localhost:3000/Perfil/" + localStorage.getItem( "KeyID" ) );
                    }
                } ).catch( ( e ) => {
                    if( e.response.status === 429 ) {
                        alert( "Ya no puedes modificar tus datos por hoy." );
                    } else if( e.response.status === 400) {
                        alert( "Información inválida." );
                    } else if( e.response.status === 404 ) {
                        alert( "No se encontro el usuario especificado." );
                    } else if( e.response.status === 409 ) {
                        alert( "El nombre de usuario ya existe." );
                    } else {
                        alert( "Ocurrio un error con el servidor. Inténtelo más tarde" );
                    }
                } );
            }  }
        >
        { formik => (
            <>
                <NavBar />
                <Container className="EditUserDataContent" fluid>
                    <Row className="BodyRow">
                        <Col id="EmptyLeftColumn" sm={ 3 }></Col>
                        <Col id="EditUserDataColumn" sm={ 6 }>
                            <Container id="FormContainer">
                                <Form id="EditUserDataForm" onSubmit={ formik.handleSubmit }>
                                    <Form.Label id="EditUserDataContentLabel">Editar Datos de usuario</Form.Label>
                                    <BasicFormInput labelId="etiquetaNombres" label="Nombres" controlId="controlNombres" name="nombres" placeholder="Introduce tus nuevos nombres."/>
                                    <BasicFormInput labelId="etiquetaApellidos" label="Apellidos" controlId="controlApellidos" name="apellidos" placeholder="Introduce tus nuevos apellidos."/>
                                    <BasicFormInput labelId="etiquetaNombreUsuario" label="Nombre Usuario" controlId="controlNombreUsuario" name="nombre_usuario" placeholder="Introduce tu nuevo usuario."/>
                                    <BasicFormEmail labelId="etiquetaEmail" label="Correo" controlId="controlEmail" name="correo_electronico" placeholder="Intruce tu nuevo correo electrónico"/>
                                    <BasicFormPassword labelId="etiquetaContrasena" label="Contraseña" controlId="controlPassword" name="contrasena" placeholder="Contraseña"/>
                                    <BasicFormPassword labelId="etiquetaConfirmarContrasena" label="Confirmar Contraseña" controlId="controlConfirmarPassword" name="confirmar_contrasena" placeholder="Confirmar Contraseña"/>
                                    <BasicFormFileInput label="Selecciona tu foto de perfil" name="archivo" valueFunc={ formik.setFieldValue }/>
                                    <BasicButton content="Editar Datos" buttonType="submit"/>
                                </Form>
                            </Container>
                        </Col>
                        <Col id="EmptyRightColumn" sm={ 3 }></Col>
                    </Row>
                </Container>
            </>
        ) }</Formik>
    );
};

export default EditUserData;