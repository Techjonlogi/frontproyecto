import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css';

import { Navbar, Row, Col } from "react-bootstrap";
import BasicSearchBar from "../EntradaUsuario/BasicSearchBar";
import DynamicNavbarLinks from "./DynamicNavBarLinks";

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
            <DynamicNavbarLinks />
          </Col>
        </Row>
      </Navbar>
    );
};

export default NavBar;