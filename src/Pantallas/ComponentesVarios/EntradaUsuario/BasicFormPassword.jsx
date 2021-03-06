import { ErrorMessage, useField } from "formik";
import { Form } from "react-bootstrap";

const BasicFormPassword = ( props ) => {
    const [ field, meta ] = useField( props );
    return (
        <Form.Group className="BasicFormInputGroup" id={ props.groupId }>
            <Form.Label className="FormLabel" id={ props.labelId } htmlFor={ field.name }>{ props.label }</Form.Label>
            <Form.Control 
                className={ `FormControlInput ${ meta.touched && meta.error && 'is-invalid' }` }
                id={ props.controlId }
                type="password" placeholder={ props.placeholder }
                { ...field }
            >
            </Form.Control>
            <ErrorMessage className="Error" name={ field.name } component="div" />
        </Form.Group>
    );
};

BasicFormPassword.defaultProps = {
    groupId: 'BasicFormInputGroup',
    labelId: 'BasicInputLabel',
    label: 'Entrada de Contraseña',
    controlId: 'PasswordControl',
    placeholder: 'Introduce alguna contraseña'
}

export default BasicFormPassword;