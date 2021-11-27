import { Form } from 'react-bootstrap';

const BasicEmail = () => {
    return (
        <Form.Group controlId="BasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="Introduce tu correo electrónico"></Form.Control>
        </Form.Group>
    );
};

export default BasicEmail;