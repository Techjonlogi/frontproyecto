import { Button } from "react-bootstrap";

const BasicButton = ( props ) => {
    return (
        <Button className="BasicButton" id={ props.buttonId }>{ props.content }</Button>
    );
};

BasicButton.defaultProps = {
    buttonId: 'defaultButton',
    content: 'Este es un botón'
}

export default BasicButton;