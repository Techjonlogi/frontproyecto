import PropTypes from "prop-types";
import { Container, Form } from "react-bootstrap";
import ImagenPerfil from "../../../Imagenes/UsuarioImagen.svg";

const InformacionUsuario = ( props ) => {
    return (
        <Container className="Capsula">
            <Container className="Capsula" id="InformacionUsuarioCabeza">
                <img className="ProfileImage" src={ ImagenPerfil } alt="ImagenPerfil" ></img>
                <Form>
                    <Form.Label className="FormLabel" id="Username">{ props.nombreUsuario }</Form.Label>
                </Form>
            </Container>
            <Container className="Capsula" id="InformacionUsuarioCuerpo">
                <dl>
                    <dt>Nombres:</dt>
                    <dd>{ props.nombres }</dd>
                    <dt>Apellidos:</dt>
                    <dd>{ props.apellidos }</dd>
                    <dt>Correo:</dt>
                    <dd>{ props.correo }</dd>
                    <dt>Se unio en:</dt>
                    <dd>{ props.unioEn }</dd>
                </dl>
            </Container>
        </Container>
    );
};

InformacionUsuario.defaultProps = {
    nombreUsuario: "Nombre de Usuario",
    nombres: "Nombres",
    apellidos: "Apellidos",
    correo: "Correo",
    unioEn: "2020-12-01"
}

InformacionUsuario.propTypes = {
    nombreUsuario: PropTypes.string,
    nombres: PropTypes.string,
    apellidos: PropTypes.string,
    correo: PropTypes.string,
    unioEn: PropTypes.string
}

export default InformacionUsuario;