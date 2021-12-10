import 'bootstrap/dist/css/bootstrap.css';
import './EditUserData.css';
import { Formik } from "formik";
import { Container, Form, Col, Row } from "react-bootstrap";
import { ConvertToBase64 } from "../ComponentesVarios/Utilidades/UtilityFunctions";
import Api from "../ComponentesVarios/Utilidades/Api/Api";
import ConfigWithAuth from "../ComponentesVarios/Utilidades/Api/Configurations/ConfigWithAuth";
import Endpoints from "../ComponentesVarios/Utilidades/Api/ApiEndpoints";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";

const EditUserData = () => {
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
            <>
                <Navbar />
                <Container className="EditUserDataContent">
                    <Row className="BodyRow">
                        <Col id="EmptyLeftColumn"></Col>
                        <Col id="EditUserDataColumn">
                            <Container id="FormContainer">
                                <Form id="EditUserDataForm" onSubmit={ formik.handleSubmit }>

                                </Form>
                            </Container>
                        </Col>
                        <Col id="EmptyRightColumn"></Col>
                    </Row>
                </Container>
            </>
        ) }</Formik>
    );
};

export default EditUserData;