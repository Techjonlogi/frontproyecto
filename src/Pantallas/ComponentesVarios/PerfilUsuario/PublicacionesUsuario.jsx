import { Container, Form, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

const PublicacionesUsuario = ( props ) => {
    return (
        <>
            <Container id="PublicacionesUsuario">
                <Container id="PublicacionesTitle">
                    <Form.Label>Publicaciones del Usuario</Form.Label>
                </Container>
                <Container id="Publicaciones">
                    { props.publicaciones.map( ( publicacion, index ) => (
                        <Container key={ index } className="Publicacion">
                            <Nav.Link href={ `/PublicacionSeleccionada/${ publicacion.clave_publicacion }` }>
                                <img className="PublicacionImage" src={ publicacion.multimedia } alt="imagen"></img>
                            </Nav.Link>
                        </Container>
                    ) ) }
                </Container>
            </Container>
        </>
    );
};

PublicacionesUsuario.defaultProps = {
    publicaciones: []
}

PublicacionesUsuario.propTypes = {
    publicaciones: PropTypes.array
}

export default PublicacionesUsuario;