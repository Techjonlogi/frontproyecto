import { Form, InputGroup } from "react-bootstrap";
import { useField } from "formik";
import BasicButton from "../Botones/BasicButton";
import PropTypes from "prop-types";

const SearchBar = ( props ) => {
    const [ field, meta ] = useField( props );
    return (
        <Form.Group className="BasicSearchInputGroup">
            <InputGroup>
                <Form.Control 
                    className={ `FormControlInput ${ meta.touched && meta.error && 'is-invalid' }` } 
                    id="SearchBar" type="text" placeholder={ props.placeholder }
                    { ...field }
                >
                </Form.Control>
                <BasicButton buttonId="BotonBuscar" content="Buscar" />
            </InputGroup>
        </Form.Group>
    );
};

SearchBar.defaultProps = {
    placeholder: 'Introduce tu cadena de búsqueda...'
}

SearchBar.propTypes = {
    placeholder: PropTypes.string
}

export default SearchBar;