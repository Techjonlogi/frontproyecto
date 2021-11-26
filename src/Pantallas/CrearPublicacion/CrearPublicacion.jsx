import { FloatingLabel, Form, Figure, Button, Col } from "react-bootstrap";

const CrearPublicacionComponent = () => {
  return (
    <div>
      <Col>
        <Form.Group controlId="formFile" className="mb-3" accept="image/*">
          <Form.Label>Seleccione el archivo a compartir</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
      </Col>

      <Col>
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

      <FloatingLabel
        controlId="nombrePublicacion"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Nombre de la publicacion" />
      </FloatingLabel>
      <FloatingLabel controlId="descripcion" label="Password">
        <Form.Control
          type="text"
          placeholder="Descripcion de la publicacion "
        />
      </FloatingLabel>

      <Button>Crear Publicacion</Button>
    </div>
  );
};

export default CrearPublicacionComponent;
