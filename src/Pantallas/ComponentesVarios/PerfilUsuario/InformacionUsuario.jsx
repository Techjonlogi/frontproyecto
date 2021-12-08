import { Container, Form } from "react-bootstrap";
import ImagenPerfil from "../../../Imagenes/UsuarioImagen.svg";

const InformacionUsuario = ( props ) => {
    return (
        <Container className="Capsula" id="InformacionUsuarioPrincipal">
            <Container className="Capsula" id="InformacionUsuarioCabeza">
                <img className="ProfileImage" src={ ImagenPerfil } alt="ImagenPerfil" ></img>
                <Form>
                    <Form.Label className="FormLabel" id="Username">{ props.datos.nombre_usuario }</Form.Label>
                </Form>
            </Container>
            <Container className="Capsula" id="InformacionUsuarioCuerpo">
                <dl>
                    <dt>Nombres:</dt>
                    <dd>{ props.datos.nombres }</dd>
                    <dt>Apellidos:</dt>
                    <dd>{ props.datos.apellidos }</dd>
                    <dt>Correo:</dt>
                    <dd>{ props.datos.correo_electronico }</dd>
                    <dt>Se unio en:</dt>
                    <dd>{ props.datos.unio_en }</dd>
                </dl>
            </Container>
        </Container>
    );
};

InformacionUsuario.defaultProps = {
    datos: []
}

export default InformacionUsuario;