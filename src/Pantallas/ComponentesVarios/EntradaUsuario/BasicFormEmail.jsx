import { useField } from 'formik';
import { Form } from 'react-bootstrap';

const BasicFormEmail = ( props ) => {
    const [ field, meta ] = useField( props );
    return (
        <Form.Group className="BasicFormInputGroup" id={ props.groupId }>
            <Form.Label className="FormLabel" id={ props.labelId } htmlFor={ field.name }>{ props.label }</Form.Label>
            <Form.Control 
                className="FormControlInput" type="email" placeholder={ props.placeholder }
                { ...field }
            >
            </Form.Control>
        </Form.Group>
    );
};

BasicFormEmail.defaultProps = {
    groupId: 'BasicFormEmailGroup',
    labelId: 'BasicEmailLabel',
    label: 'Correo Electrónico',
    placeholder: 'Introduce tu correo electrónico'
}

export default BasicFormEmail;