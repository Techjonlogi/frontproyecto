import 'bootstrap/dist/css/bootstrap.css';
import './EditUserData.css';
import { Formik } from "formik";
import { Container, Form, Col, Row } from "react-bootstrap";
import { ConvertToBase64 } from "../ComponentesVarios/Utilidades/UtilityFunctions";
import Api from "../ComponentesVarios/Utilidades/Api/Api";
import ConfigWithAuth from "../ComponentesVarios/Utilidades/Api/Configurations/ConfigWithAuth";
import Endpoints from "../ComponentesVarios/Utilidades/Api/ApiEndpoints";
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
                                    <BasicFormInput labelId="etiquetaNombres" label="Nombres" controlId="controlNombres" name="nombres" placeholder="Introduce tu nuevo nombre."/>
                                    <BasicFormInput labelId="etiquetaApellidos" label="Apellidos" controlId="controlApellidos" name="apellidos" placeholder="Introduce tus nuevos apellidos."/>
                                    <BasicFormInput labelId="etiquetaNombreUsuario" label="Nombre Usuario" controlId="controlNombreUsuario" name="nombre_usuario" placeholder="Introduce tu nuevo usuario."/>
                                    <BasicFormEmail labelId="etiquetaEmail" label="Correo" name="correo_electronico" placeholder="Intruce tu nuevo correo electrónico"/>
                                    <BasicFormPassword labelId="etiquetaContrasena" label="Contraseña" name="contrasena" placeholder="Contraseña"/>
                                    <BasicFormPassword labelId="etiquetaConfirmarContrasena" label="Confirmar Contraseña" name="confirmar_contrasena" placeholder="Confirmar Contraseña"/>
                                    <BasicFormFileInput name="archivo" valueFunc={ formik.setFieldValue }/>
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