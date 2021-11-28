import { DropdownButton, Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";

const BasicDropdownButton = ( props ) => {
    return (
        <DropdownButton className="BasicDropdownButton" id={ props.dropdownId } title={ props.title }>
            { props.items.map( ( item, index ) => (
                <Dropdown.Item eventKey={ index }>{ item }</Dropdown.Item>
            ))}
        </DropdownButton>
    );
};

BasicDropdownButton.defaultProps = {
    dropdownId: 'BasicDropdown',
    title: 'Empty Dropdown',
    items: []
}

BasicDropdownButton.propTypes = {
    dropdownId: PropTypes.string,
    title: PropTypes.string,
    items: PropTypes.array
}

export default BasicDropdownButton;