import { Form } from "react-bootstrap";

const PublicationDetails = ( props ) => {
    return (
        <>
            <Form className="formInformacion">
                <Form.Group>
                    <Form.Label className="basicLabel">Nombre</Form.Label>
                    <Form.Control type= "text" disabled className="basicInput" placeholder={ props.publicacion.nombre_publicacion }></Form.Control>
                    <Form.Label className="basicLabel" >Informacion Publicacion</Form.Label>
                    <Form.Control type= "text" disabled className="basicInput" placeholder={ props.publicacion.descripcion }></Form.Control>
                    <Form.Label className="basicLabel">Calificacion</Form.Label>
                    <Form.Control type= "text" disabled className="basicInput" placeholder={ props.publicacion.calificacion_general }></Form.Control>
                    <Form.Label className="basicLabel">Fecha de la publicacion</Form.Label>
                    <Form.Control type= "text" disabled className="basicInput" placeholder={ props.publicacion.fecha_publicacion }></Form.Control>
                </Form.Group>
            </Form>
        </>
    );
};

PublicationDetails.defaultProps = {
    publicacion: []
}

export default PublicationDetails;