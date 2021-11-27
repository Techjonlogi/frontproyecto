import { Form } from "react-bootstrap";

const BasicFormPassword = ( props ) => {
    return (
        <Form.Group className="BasicFormInputGroup" id={ props.groupId }>
            <Form.Label className="FormLabel" id={ props.labelId }>{ props.label }</Form.Label>
            <Form.Control className="FormControlInput" type="password" placeholder={ props.placeholder }></Form.Control>
        </Form.Group>
    );
};

BasicFormPassword.defaultProps = {
    groupId: 'BasicFormInputGroup',
    labelId: 'BasicInputLabel',
    label: 'Entrada de Contraseña',
    placeholder: 'Introduce alguna contraseña'
}

export default BasicFormPassword;