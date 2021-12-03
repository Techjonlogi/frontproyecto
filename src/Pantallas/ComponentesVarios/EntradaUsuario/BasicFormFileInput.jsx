import { Form } from "react-bootstrap";
import { ErrorMessage, useField, useFormikContext } from 'formik';
import PropTypes from 'prop-types';

const BasicFormFileInput = ( props ) => {
    const [ field, meta ] = useField( props );
    const { setFieldValue } = useFormikContext();
    const { value, ...rest } = field;
    return (
        <Form.Group className="BasicFormInputGroup" id={ props.groupId }>
            <Form.Label className="FormLabel" id={ props.labelId } htmlFor={ field.name }>{ props.label }</Form.Label>
            <Form.Control 
                className={ `FileControlInput ${ meta.touched && meta.error && 'is-invalid' }` }
                type={ props.type } 
                accept= ".jpg, .png"
                { ...rest }
                onChange= { changeEvent => { 
                    setFieldValue( field.name, changeEvent.target.files[ 0 ] )
                } }
            >
            </Form.Control>
            <ErrorMessage className="Error" name={ field.name } component="div"/>
        </Form.Group>
    );
};

BasicFormFileInput.defaultProps = {
    groupId: 'BasicFormInputGroup',
    label: 'Selecciona el archivo deseado',
    labelId: 'SelectLabel',
    type: 'file'
}

BasicFormFileInput.propTypes = {
    groupId: PropTypes.string,
    label: PropTypes.string,
    labelId: PropTypes.string,
    type: PropTypes.string
}

export default BasicFormFileInput;