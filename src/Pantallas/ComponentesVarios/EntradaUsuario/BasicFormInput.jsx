import { Form } from 'react-bootstrap';
import { ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';

const BasicFormInput = ( props ) => {
    const [ field, meta ] = useField( props );
    return (
        <Form.Group className="BasicFormInputGroup" id={ props.groupId }>
            <Form.Label className="FormLabel" id={ props.labelId } htmlFor={ field.name }>{ props.label }</Form.Label>
            <Form.Control 
                className={ `FormControlInput ${ meta.touched && meta.error && 'is-invalid' }` }
                type={ props.controlType }
                id={ props.controlId } placeholder={ props.placeholder }
                { ...field }
            >
            </Form.Control>
            <ErrorMessage className="Error" name={ field.name } component="div" />
        </Form.Group>
    );
};

BasicFormInput.defaultProps = {
    groupId: 'BasicFormInputGroup',
    labelId: 'BasicInputLabel',
    controlId: 'UserInput',
    label: 'Entrada de Usuario',
    controlType: 'text',
    placeholder: 'Introduce alguna entrada'
}

BasicFormInput.propTypes = {
    groupId: PropTypes.string,
    labelId: PropTypes.string,
    controlId: PropTypes.string,
    label: PropTypes.string,
    controlType: PropTypes.string,
    placeholder: PropTypes.string
}

export default BasicFormInput;