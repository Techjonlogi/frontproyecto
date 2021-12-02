import "bootstrap/dist/css/bootstrap.css";
import "./CrearPublicacion.css";

import { Formik } from "formik";
import { Container, FloatingLabel, Form, Figure, Button, Col, Row } from "react-bootstrap";
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
                  <Form id="CreatePublicationForm">
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
    // <container className="ContenedorCrearPublicacion">
    //   <Col xs={ 5 }>
    //     <Form.Group controlId="formFile" className="mb-3" accept="image/*">
    //       <Form.Label className="imputPublicacion">Seleccione el archivo a compartir</Form.Label>
    //       <Form.Control type="file" accept=".jpg,.png" />
    //     </Form.Group>
   
    //     <Figure>
    //       <Figure.Image
    //         width={171}
    //         height={180}
    //         alt="171x180"
    //         src="{this.formFile.file}"
    //       />
    //       <Figure.Caption></Figure.Caption>
    //     </Figure>
   
      
      
    //   <Form>
    //     <Form.Group className="mb-3">
    //       <Form.Label className="imputPublicacion">Nombre Publicacion</Form.Label>
    //       <Form.Control
    //         id="inputNombre"
    //         type="text"
    //         placeholder="Ingrese el Nombre de su publicacion"/>
    //     </Form.Group>
    //     <Form.Group className="mb-3">
    //       <Form.Label className="imputPublicacion">Nombre Publicacion</Form.Label>
    //       <Form.Control
    //         id="inputdescripcion"
    //         type="text"
    //         placeholder="Ingrese la descripcion de su publicacion"/>
    //     </Form.Group>
    //   </Form>
    //   </Col>
    //   <Button>Crear Publicacion</Button>
    //   </container>
  );
};

export default CrearPublicacion;