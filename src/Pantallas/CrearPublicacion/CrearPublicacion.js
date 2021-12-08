import "bootstrap/dist/css/bootstrap.css";
import "./CrearPublicacion.css";

import { Formik } from "formik";
import { Container, Form, Col, Row } from "react-bootstrap";
import { ConvertToBase64 } from "../ComponentesVarios/Utilidades/UtilityFunctions";
import Api from "../ComponentesVarios/Utilidades/Api/Api";
import ConfigWithAuth from "../ComponentesVarios/Utilidades/Api/Configurations/ConfigWithAuth";
import Endpoints from "../ComponentesVarios/Utilidades/Api/ApiEndpoints";
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
        categoria: '',
        archivo: ''
      } }
      validationSchema= { PublicationinputSchema }
      onSubmit={ async ( values ) => {
          const publicationData = {
            nombre_publicacion: values.nombre_publicacion,
            descripcion: values.descripcion_publicacion,
            categoria: values.categoria,
            multimedia: ( await ConvertToBase64( values.archivo ) )
          }

          console.log( publicationData );
          await Api.post(
            Endpoints.publicacionesUsuario + "/" + localStorage.getItem( "KeyID" ),
            publicationData,
            ConfigWithAuth
          ).then( ( response ) => {
            if( response.status === 201 ) {
              console.log( response.data )
            }
          } ).catch( ( e ) => {
            console.log( e.response.status );
            console.log( e.response.data );
          } );
      } }
    >
      { formik => (
        <>
          <NavBar />
          <Container className="CreatePublicationContent" fluid>
            <Row className="BodyRow">
              <Col id="EmptyLeftColumn" sm={ 3 }></Col>
              <Col id="CreatePublicationColumn" sm={ 6 }>
                <Container id="FormContainer">
                  <Form id="CreatePublicationForm" onSubmit={ formik.handleSubmit }>
                    <Form.Label id="PublicationContentLabel">Crear Publicación</Form.Label>
                    <BasicFormFileInput name="archivo" valueFunc={ formik.setFieldValue }/>
                    <BasicFormInput labelId="etiquetaNombrePublicacion" label="Nombre Publicación" controlId="controlNombrePublicacion" name="nombre_publicacion" placeholder="Introduce el nombre de la publicación"/>
                    <BasicFormTextArea labelId="etiquetaDescripcion" label="Descripción Publicación" controlId="controlDescripcion" name="descripcion_publicacion" placeholder="Introduce la descripción de la publicación"/>
                    <BasicFormSelect labelId="etiquetaCategoria" label="Categoria de Publicación" selectId="selectCategoria" name="categoria" options={ [ 'Digital', 'Pintura' ] }/>
                    <BasicButton content="Crear Publicación" buttonType="submit"/>
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