import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const BasicFormInput = ( props ) => {
    return (
        <Form.Group className="BasicFormInputGroup" id={ props.groupId }>
            <Form.Label className="FormLabel" id={ props.labelId }>{ props.label }</Form.Label>
            <Form.Control className="FormControlInput" type="text" id={ props.controlId } placeholder={ props.placeholder } onChange={ props.onChangeFunc }></Form.Control>
        </Form.Group>
    );
};

BasicFormInput.defaultProps = {
    groupId: 'BasicFormInputGroup',
    labelId: 'BasicInputLabel',
    controlId: 'UserInput',
    label: 'Entrada de Usuario',
    placeholder: 'Introduce alguna entrada'
}

BasicFormInput.propTypes = {
    groupId: PropTypes.string,
    labelId: PropTypes.string,
    controlId: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeFunc: PropTypes.func
}

export default BasicFormInput;