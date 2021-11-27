import { DropdownButton } from "react-bootstrap";

const BasicDropdownButton = ( props ) => {
    return (
        <DropdownButton className="BasicDropdownButton" id={ props.dropdownId }></DropdownButton>
    );
};

BasicDropdownButton.defaultProps = {
    dropdownId = 'BasicDropdown',
}

export default BasicDropdownButton;