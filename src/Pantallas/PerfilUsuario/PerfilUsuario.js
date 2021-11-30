import 'bootstrap/dist/css/bootstrap.css';
import './PerfilUsuario.css';

import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";
import InformacionUsuario from '../ComponentesVarios/PerfilUsuario/InformacionUsuario';

const PerfilUsuario = () => {
    return (
        <>
            <NavBar />
            <Container className="PerfilContent" fluid>
                <Row className="BodyRow">
                    <Col id="EmptyLeftColumn" sm={ 2 }></Col>
                    <Col id="UserInfoColumn" sm={ 3 }>
                        <InformacionUsuario />
                    </Col>
                    <Col id="UserPublicationsColumn" sm={ 5 }></Col>
                    <Col id="EmptyRightColumn" sm={ 2 }></Col>
                </Row>
            </Container>
        </>
    );
};

export default PerfilUsuario;