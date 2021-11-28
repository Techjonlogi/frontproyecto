import { Navbar, Row, Col } from "react-bootstrap";

const NavBar = ( idCategoria ) => {
    return (
      <Navbar bg="dark" variant="dark">
        <Row>
          <Col className="BrandColumn">
            <Navbar.Brand href="/Home">
              Nombre Sitio
            </Navbar.Brand>
          </Col>
          <Col className="SearchColumn">
          </Col>
          <Col className="LinkColumn">
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