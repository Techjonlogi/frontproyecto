import { Form } from 'react-bootstrap';

const BasicFormEmail = ( props ) => {
    return (
        <Form.Group className="BasicFormEmailGroup" id={ props.groupId }>
            <Form.Label className="FormLabel" id={ props.labelId }>{ props.label }</Form.Label>
            <Form.Control className="FormControlInput" type="email" placeholder={ props.placeholder }></Form.Control>
        </Form.Group>
    );
};

BasicFormEmail.defaultProps = {
    groupId: 'BasicFormEmailGroup',
    labelId: 'BasicEmailLabel',
    label: 'Correo Electrónico',
    placeholder: 'Introduce tu correo electrónico'
}

export default BasicFormEmail;