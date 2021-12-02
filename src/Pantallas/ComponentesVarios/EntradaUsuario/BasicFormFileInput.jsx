import { Form } from "react-bootstrap";
import { ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';

const BasicFormFileInput = ( props ) => {
    const [ field, meta ] = useField( props );
    return (
        <Form.Group className="BasicFormInputGroup">
            <Form.Label className="FormLabel" labelId={ props.labelId } htmlFor={ field.name }>{ props.label }</Form.Label>
            <Form.Control 
                className={ `FileControlInput ${ meta.touched && meta.error && 'is-invalid' }` }
                type={ props.type } 
                accept={ props.accept }
                { ...field }
            >
            </Form.Control>
            <ErrorMessage className="Error" name={ field.name } component="div"/>
        </Form.Group>
    );
};

BasicFormFileInput.defaultProps = {
    label: 'Selecciona el archivo deseado',
    labelId: 'SelectLabel',
    type: 'file',
    accept= '.jpg, .png'
};

BasicFormFileInput.PropTypes = {
    label: propTypes.string,
    labelId: propTypes.string,
    type: propTypes.string,
    accept: propTypes.string
}

export default BasicFormFileInput;