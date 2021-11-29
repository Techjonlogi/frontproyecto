import { Form } from 'react-bootstrap';

const BasicFormInput = ( props ) => {
    return (
        <Form.Group className="BasicFormInputGroup" id={ props.groupId }>
            <Form.Label className="FormLabel" id={ props.labelId }>{ props.label }</Form.Label>
            <Form.Control className="FormControlInput" type="text" placeholder={ props.placeholder }></Form.Control>
        </Form.Group>
    );
};

BasicFormInput.defaultProps = {
    groupId: 'BasicFormInputGroup',
    labelId: 'BasicInputLabel',
    label: 'Entrada de Usuario',
    placeholder: 'Introduce alguna entrada'
}

export default BasicFormInput;