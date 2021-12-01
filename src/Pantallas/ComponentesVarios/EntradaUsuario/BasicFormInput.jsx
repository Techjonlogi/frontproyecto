import { Form } from 'react-bootstrap';
import { ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';

const BasicFormInput = ( props ) => {
    const [ field, meta ] = useField( props );
    return (
        <Form.Group className="BasicFormInputGroup" id={ props.groupId }>
            <Form.Label className="FormLabel" id={ props.labelId } htmlFor={ field.name }>{ props.label }</Form.Label>
            <Form.Control 
                className="FormControlInput" type="text" 
                id={ props.controlId } placeholder={ props.placeholder }
                { ...field }
            >
            </Form.Control>
            <ErrorMessage className="ErrorMessage" name={ field.name } />
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
    placeholder: PropTypes.string
}

export default BasicFormInput;