import { Form, InputGroup } from "react-bootstrap";
import BasicButton from "../Botones/BasicButton";
import PropTypes from "prop-types";

const SearchBar = ( props ) => {
    return (
        <Form.Group className="BasicSearchInputGroup">
            <InputGroup>
                <Form.Control className="FormControlInput" id="SearchBar" type="text" placeholder={ props.placeholder }></Form.Control>
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