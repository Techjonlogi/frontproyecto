import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css';

import { Navbar, Row, Col } from "react-bootstrap";
import BasicSearchBar from "../EntradaUsuario/BasicSearchBar";

const NavBar = ( idCategoria ) => {
    return (
      <Navbar className="NavigationBar">
        <Row id="row">
          <Col className="BrandColumn" >
            <Navbar.Brand className="SiteLogoLink" href="/Home">New Talent</Navbar.Brand>
          </Col>
          <Col className="SearchColumn" xs={ 5 }>
            <BasicSearchBar />
          </Col>
          <Col className="LinkColumn" >
          </Col>
        </Row>
      </Navbar>

    // <div className="BarraNavegacion">
    //   <Nav justify variant="tabs" defaultActiveKey="/home">
    //     <Nav.Item>
    //       <Nav.Link href="/home">Active</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link href="/login">Loooonger NavLink</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link eventKey="link-2">Link</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link eventKey="link-3" >
    //         Disabled
    //       </Nav.Link>
    //     </Nav.Item>
    //   </Nav>
    // </div>
    );
};

export default NavBar;