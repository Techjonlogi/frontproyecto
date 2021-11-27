import { Form } from 'react-bootstrap';

const BasicFormEmail = () => {
    return (
        <Form.Group className="BasicEmailGroup">
            <Form.Label id="BasicEmailLabel">Correo Electrónico</Form.Label>
            <Form.Control className="FormControlInput" type="email" placeholder="Introduce tu correo electrónico"></Form.Control>
        </Form.Group>
    );
};

export default BasicFormEmail;