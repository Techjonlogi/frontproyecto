import { FloatingLabel, Form, Figure, Button, Col } from "react-bootstrap";
import "./CrearPublicacion.css";

const CrearPublicacionComponent = (idUsuario) => {
  return (
    <container className="ContenedorCrearPublicacion">
      <Col xs={ 5 } className="File">
        <Form.Group controlId="formFile" className="mb-3" accept="image/*">
          <Form.Label className="imputPublicacion">Seleccione el archivo a compartir</Form.Label>
          <Form.Control type="file" accept=".jpg,.png" />
        </Form.Group>
      </Col>

      <Col xs={ 5 }>
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="{this.formFile.file}"
          />
          <Figure.Caption></Figure.Caption>
        </Figure>
      </Col>
      <Col xs={ 5 }>
      
      
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="imputPublicacion">Nombre Publicacion</Form.Label>
          <Form.Control
            id="inputNombre"
            type="text"
            placeholder="Ingrese el Nombre de su publicacion"/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="imputPublicacion">Nombre Publicacion</Form.Label>
          <Form.Control
            id="inputdescripcion"
            type="text"
            placeholder="Ingrese la descripcion de su publicacion"/>
        </Form.Group>
      </Form>
      </Col>
      <Button>Crear Publicacion</Button>
      </container>
  );
};

export default CrearPublicacionComponent;
