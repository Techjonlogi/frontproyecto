import { Form } from "react-bootstrap";

const BasicFormFileInput = () => {
    return (
        <Form.Group className="BasicFormInputGroup">
            <Form.Label>Selecciona el archivo deseado</Form.Label>
            <Form.Control type="file" accept=".jpg, .png"></Form.Control>
        </Form.Group>
    );
};

export default BasicFormFileInput;