import { Nav} from "react-bootstrap";



const NavBar = (idCategoria) => {

  

    return (
    <div>
      <Nav justify variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/login">Loooonger NavLink</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3" >
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>

    </div>);
};

export default NavBar;