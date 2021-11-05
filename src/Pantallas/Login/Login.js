import react from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import imagenUsuario from "../../Imagenes/UsuarioImagen.svg"
import './Login.css';
import imagenFondo from"../../Pantallas/Login/Imagenes/LoginImagen.jpeg"



const Login = () => {
  return (
    
      <Container className="text-center" id="ContenedorPrincipal" >
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
              <img className="icon-img" src= {imagenUsuario} alt="Icono usuario"></img>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control  type="text" placeholder="Ingrese su usuario" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <Button variant="primary btn-block" type="submit">
                Ingresar
              </Button>
              <div className="text-center mt-3" >
                  <a href="#"><small className="reset">Recuperar Contraseña</small></a> ||
                  <a href="#"><small className="reset ml-2" >Registrate</small></a>
              </div>
            
            </Form>
          </Col>
          <Col lg={4} md={6} sm={12}>
              <img src={imagenFondo} alt="" id="ImagenFondo">
              </img>
          </Col>
        </Row>
      </Container>
    
  );
};

export default Login;
