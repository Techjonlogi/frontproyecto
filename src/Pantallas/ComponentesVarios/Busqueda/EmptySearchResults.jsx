import { Container, Form } from "react-bootstrap";

const EmptySearchResults = () => {
    return (
        <Container className="SearchResults">
            <Form.Group>
                <Form.Label>No hubo resultados de la búsqueda.</Form.Label>
            </Form.Group>
        </Container>
    );
};

export default EmptySearchResults;