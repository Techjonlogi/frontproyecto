import 'bootstrap/dist/css/bootstrap.css';
import "./Card.css";
import { Card } from "react-bootstrap";

const CardPublicacion = ( props ) => {

  const redirect = () => {
    window.location.assign( "/PublicacionSeleccionada/" + props.publication.clave_publicacion ); 
  }

  return (
    <>
      <Card className="bodyCard">
        <Card.Img className="ImageCard" variant="top" src={ props.publication.multimedia } onClick={ redirect } />
        <Card.Body>
          <Card.Title>{ props.publication.nombre_publicacion }</Card.Title>
          <Card.Text>
            { props.publication.descripcion }
          </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
};

CardPublicacion.defaultProps = {
  publication: []
}

export default CardPublicacion;