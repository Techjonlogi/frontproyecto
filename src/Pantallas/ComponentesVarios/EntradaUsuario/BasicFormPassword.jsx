import { useField } from "formik";
import { Form } from "react-bootstrap";

const BasicFormPassword = ( props ) => {
    const [ field, meta ] = useField( props );
    return (
        <Form.Group className="BasicFormInputGroup" id={ props.groupId }>
            <Form.Label className="FormLabel" id={ props.labelId } htmlFor={ field.name }>{ props.label }</Form.Label>
            <Form.Control 
                className="FormControlInput" type="password" placeholder={ props.placeholder }
                { ...field }
            >
            </Form.Control>
        </Form.Group>
    );
};

BasicFormPassword.defaultProps = {
    groupId: 'BasicFormInputGroup',
    labelId: 'BasicInputLabel',
    label: 'Entrada de Contraseña',
    placeholder: 'Introduce alguna contraseña'
}

export default BasicFormPassword;