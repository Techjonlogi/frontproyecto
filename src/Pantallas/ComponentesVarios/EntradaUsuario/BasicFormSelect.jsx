import { Form } from 'react-bootstrap';
import { ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';

const BasicFormSelect = ( props ) => {
    const [ field, meta ] = useField( props );
    return (
        <Form.Group className="BasicFormInputGroup" id={ props.groupId } >
            <Form.Label className="FormLabel" id={ props.labelId } htmlFor={ field.name }>{ props.label }</Form.Label>
            <Form.Select 
                className={ `FormSelect ${ meta.touched && meta.error && 'is-invalid' }` }
                id={ props.selectId }
                { ...field }
            >
                <option key={ -1000 } value={ -1 }>{ props.placeholder }</option>
                { props.options.map( ( option, index ) => (
                    <option key={ index } value={ index }>{ option }</option>
                ) ) }
            </Form.Select>
            <ErrorMessage className="Error" name={ field.name } component="div" />
        </Form.Group>
    );
};

BasicFormSelect.defaultProps = {
    groupId: 'BasicSelectInputGroup',
    labelId: 'BasicInputLabel',
    selectId: 'SelectInput',
    options: [],
    label: 'Selección de Usuario',
    placeholder: 'Seleccione alguna opción'
}

BasicFormSelect.propTypes = {
    groupId: PropTypes.string,
    labelId: PropTypes.string,
    selectId: PropTypes.string,
    options: PropTypes.array,
    label: PropTypes.string,
    placeholder: PropTypes.string
}

export default BasicFormSelect;