import { Nav} from "react-bootstrap";



const NavBar = (idCategoria) => {

  

    return (
    <div>
      <Nav justify variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Juegos</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/login">Conceptual</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Cine</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-6" >Danza</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-4" >Pintura</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-5" >Musica</Nav.Link>
  </Nav.Item>

</Nav>

    </div>);
};

export default NavBar;