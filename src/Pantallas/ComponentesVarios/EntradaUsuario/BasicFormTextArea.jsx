import { Form } from 'react-bootstrap';
import { ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';

const BasicFormTextArea = ( props ) => {
    const [ field, meta ] = useField( props );
    return (
        <Form.Group className="BasicFormTextArea" id={ props.groupId }>
            <Form.Label className="FormLabel" id={ props.labelId } htmlFor={ field.name }>{ props.label }</Form.Label>
            <Form.Control 
                className={ `FormControlInput ${ meta.touched && meta.error && 'is-invalid' }` }
                as="textarea"
                id={ props.controlId } placeholder={ props.placeholder }
                { ...field }
            >
            </Form.Control>
            <ErrorMessage className="Error" name={ field.name } component="div"/>
        </Form.Group>
    );
};

BasicFormTextArea.defaultProps = {
    groupId: 'BasicFormInputGroup',
    labelId: 'BasicInputLabel',
    controlId: 'UserInput',
    label: 'Entrada de Usuario',
    placeholder: 'Introduce alguna entrada'
}

BasicFormTextArea.propTypes = {
    groupId: PropTypes.string,
    labelId: PropTypes.string,
    controlId: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string
}

export default BasicFormTextArea;