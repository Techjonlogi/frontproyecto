import { Container, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const SearchResultsPublicaciones = ( props ) => {
    return (
        <>
            <Container className="SearchResultsPublicaciones">
                <Form.Label>Publicaciones:</Form.Label>
                <ListGroup id="PublicacionesList" as="ul">
                    { props.publicaciones.map( ( publicacion, index ) => (
                        <ListGroup.Item action href="http://localhost:3000/Home" as="li">
                            <Container className="IconoPublicacion"></Container>
                            <Container className="DetallesPublicacion">
                                <Container className="TituloPublicacion">
                                    <h4>{ publicacion.nombre_publicacion }</h4>
                                </Container>
                                <Container className="DetallesPublicacion">
                                    { publicacion.descripcion }
                                </Container>
                            </Container>
                        </ListGroup.Item>
                    ) ) }
                </ListGroup>
            </Container>
        </>
    );
};

SearchResultsPublicaciones.defaultProps = {
    publicaciones: []
}

SearchResultsPublicaciones.propTypes = {
    publicaciones: PropTypes.array
}

export default SearchResultsPublicaciones;