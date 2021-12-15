import { Container, Form, Image, Row } from "react-bootstrap";
import ImagenPerfil from "../../../Imagenes/UsuarioImagen.svg";
import ProfileImage from "./ProfileImage";

const InformacionUsuario = ( props ) => {
    return (
        <Container className="Capsula" id="InformacionUsuarioPrincipal">
            <Container className="Capsula" id="InformacionUsuarioCabeza">
                <Row className="InformacionUsuarioCabezaRow" id="ProfileImageRow" >
                    <ProfileImage fotoPerfil={ props.imagenPerfil }/>
                </Row>
                <Row className="InformacionUsuarioCabezaRow">
                    <Form>
                        <Form.Label className="FormLabel" id="Username">{ props.datos.nombre_usuario }</Form.Label>
                    </Form>
                </Row>
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
                    <dd>{ props.datos.fecha_union }</dd>
                </dl>
            </Container>
        </Container>
    );
};

InformacionUsuario.defaultProps = {
    datos: [],
    imagenPerfil: ImagenPerfil
}

export default InformacionUsuario;