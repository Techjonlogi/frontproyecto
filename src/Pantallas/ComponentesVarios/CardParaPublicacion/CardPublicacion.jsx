import 'bootstrap/dist/css/bootstrap.css';
import "./Card.css";
import { Card } from "react-bootstrap";

const CardPublicacion = ( props ) => {

  const redirect = () => {
    window.location.assign( "/PublicacionSeleccionada/" + props.clave_publicacion ); 
  }

  return (
    <>
      <Card className="bodyCard">
        <Card.Img className="ImageCard" variant="top" src={ props.multimedia } onClick={ redirect } />
      </Card>
    </>
  );
};

CardPublicacion.defaultProps = {
  clave_publicacion: '',
  multimedia: ''
}

export default CardPublicacion;