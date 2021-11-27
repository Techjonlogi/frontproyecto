import { Form } from 'react-bootstrap';

const BasicInput = ( props ) => {
    return (
        <Form.Group className="BasicInputGroup" id={ props.groupId }>
            <Form.Label id={ props.labelId }>{ props.label }</Form.Label>
            <Form.Control type="text" placeholder={ props.placeholder }></Form.Control>
        </Form.Group>
    );
};

BasicInput.defaultProps = {
    groupId = 'BasicInputGroup',
    labelId = 'BasicInputLabel',
    label = 'Entrada de Usuario',
    placeholder = 'Introduce alguna entrada'
}

export default BasicInput;