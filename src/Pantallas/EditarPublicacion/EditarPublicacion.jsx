
import { Form,Row, Col, Button } from "react-bootstrap";
import "./Editarpublicacion.css"

const EditarPublicacion =()=>{
    return(

        
        <>
        <section className="seccionPublicacion">
            <Row>
                <Col>
                <Form className="formInformacion">
                    <Form.Group>
                        <Form.Label className="basicLabel">Nombre</Form.Label>
                        <Form.Control type= "text"  className="basicInput" placeholder="Ingrese el nuevo nombre..."></Form.Control>
                        <Form.Label className="basicLabel" >Descripcion</Form.Label>
                        <Form.Control type= "text"  className="basicInput" placeholder = "Ingrese nueva descripcion..."></Form.Control>
                        <Form.Label className="basicLabel">Nuevo Archivo</Form.Label>
                        <Form.Control className = "inputImagen" type="file" accept=".jpg,.png" />
                        <Button className="btnPublicar">Guardar</Button>
        
                    </Form.Group>
                </Form>
                </Col>
                
                <Col>
                <img></img>
                </Col>
               
            </Row>
        </section>
        </>
    );


 


};

export default EditarPublicacion;