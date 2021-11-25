import { Nav, Button, NavItem, Card } from "react-bootstrap";



const NavBar = () => {
    return (
    <div>
         <Nav
        id="menuPrincipal"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Logo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Login">Juegos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Conceptual</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-2">Cine</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Danza</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Pintura</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Musica</Nav.Link>
        </Nav.Item>

        <NavItem>
          <div>
            <a href="#">
              <small className="reset">Login</small>
            </a>
          </div>
        </NavItem>
        <NavItem>
          <div>
            <a href="#">
              <small className="reset ml-2">Registrate</small>
            </a>
          </div>
        </NavItem>
      </Nav>

    </div>);
};

export default NavBar;