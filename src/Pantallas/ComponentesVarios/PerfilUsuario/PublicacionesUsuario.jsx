import { Container, Form, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

const PublicacionesUsuario = ( props ) => {
    return (
        <>
            <Container id="PublicacionesUsuario">
                <Container className="PublicacionesTitle">
                    <Form.Label>Publicaciones del Usuario:</Form.Label>
                </Container>
                <Container className="Publicaciones">
                    { props.publicaciones.map( ( publicacion, index ) => (
                        <Container className="Publicacion">
                            <Nav.Link href="/Home">
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