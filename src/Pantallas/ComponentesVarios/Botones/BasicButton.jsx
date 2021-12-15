import { Button } from "react-bootstrap";

const BasicButton = ( props ) => {
    return (
        <Button className="BasicButton" id={ props.buttonId } type={ props.buttonType } onClick={ props.onClick }>{ props.content }</Button>
    );
};

BasicButton.defaultProps = {
    buttonId: 'defaultButton',
    content: 'Este es un botón'
}

export default BasicButton;