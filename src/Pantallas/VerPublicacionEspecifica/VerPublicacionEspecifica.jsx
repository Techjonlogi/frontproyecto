import {Button,Row,Col,Form,Table} from "react-bootstrap";
import React from "react";
import "./VerPublicacion.css"


const ComponenteVerpublicacion = () => {
    return(
<>
<section>
    <Row>
        <Col>
        <img></img>
        <Form>
            <Form.Group>
                <Form.Label className="basicLabel">Nombre</Form.Label>
                <Form.Control type= "text"></Form.Control>
                <Form.Label className="basicLabel">Informacion General</Form.Label>
                <Form.Control type= "text"></Form.Control>
                <Form.Label className="basicLabel">Informacion Publicacion</Form.Label>
                <Form.Control type= "text"></Form.Control>

            </Form.Group>
        </Form>
        </Col>
        
        <Col>
        <img></img>
        </Col>
       
    </Row>
</section>
<section className="seccionComentarios">
    <Row className="divTablaComentarios">
    <Table striped bordered hover className="tablaComentarios">
            <thead>
                <tr>
                    <th>usuario</th>
                    <th>Comentario</th>
                    <th>Opciones</th>
                    
                </tr>
            </thead>

        </Table>
        <Form className="formComentarios">
        <Form.Control className="imputComentario" type="text" placeholder ="ingrese su comentario"></Form.Control>
        <Row className="wrapper">
        <Button className="btnPublicar">Comentar</Button>
        </Row>
        
        </Form>
    </Row>
</section>
</>

    );

}

export default ComponenteVerpublicacion;