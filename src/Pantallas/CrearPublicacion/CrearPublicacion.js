import "bootstrap/dist/css/bootstrap.css";
import "./CrearPublicacion.css";

import { Formik } from "formik";
import { Container, Form, Figure, Col, Row } from "react-bootstrap";
import PublicationinputSchema from "../ComponentesVarios/Utilidades/ValidationSchemas/PublicationInputSchema";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";
import BasicFormFileInput from "../ComponentesVarios/EntradaUsuario/BasicFormFileInput";
import BasicFormInput from "../ComponentesVarios/EntradaUsuario/BasicFormInput";
import BasicFormTextArea from "../ComponentesVarios/EntradaUsuario/BasicFormTextArea";
import BasicFormSelect from "../ComponentesVarios/EntradaUsuario/BasicFormSelect";
import BasicButton from "../ComponentesVarios/Botones/BasicButton";

const CrearPublicacion = () => {
  return (
    <Formik
      initialValues= { {
        nombre_publicacion: '',
        descripcion_publicacion: '',
        categoria: ''
      } }
      validationSchema= { PublicationinputSchema }
    >
      { formik => (
        <>
        { console.log( formik.values) }
          <NavBar />
          <Container className="CreatePublicationContent" fluid>
            <Row className="BodyRow">
              <Col id="EmptyLeftColumn" sm={ 3 }></Col>
              <Col id="CreatePublicationColumn" sm={ 6 }>
                <Container id="FormContainer">
                  <Form id="CreatePublicationForm" onSubmit={ formik.handleSubmit }>
                    <Form.Label id="PublicationContentLabel">Crear Publicación</Form.Label>
                    <BasicFormFileInput />
                    <BasicFormInput labelId="etiquetaNombrePublicacion" label="Nombre Publicación" controlId="controlNombrePublicacion" name="nombre_publicacion"/>
                    <BasicFormTextArea labelId="etiquetaDescripcion" label="Descripción Publicación" controlId="controlDescripcion" name="descripcion_publicacion" />
                    <BasicFormSelect labelId="etiquetaCategoria" label="Categoria de Publicación" selectId="selectCategoria" name="categoria" options={ [ 'Digital', 'Pintura' ] }/>
                    <BasicButton content="Crear Publicación"/>
                  </Form>
                </Container>
              </Col>
              <Col id="EmptyRightColumn" sm={ 3 }></Col>
            </Row>
          </Container>
        </>
      ) }  
    </Formik>
  );
};

export default CrearPublicacion;