import React,{useState} from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import imagenUsuario from "../../Imagenes/UsuarioImagen.svg"
import './Login.css';
import imagenFondo from"../../Pantallas/Login/Imagenes/LoginImagen.jpeg"



const Login = () => {


  const expresiones = {
    usuarioExpresion: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombreExpresion: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    passwordExpresion: /^.{4,12}$/, // 4 a 12 digitos.
    correoExpresion: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefonoExpresion: /^\d{7,14}$/ // 7 a 14 numeros.
  }


  const [usuario,cambiarUsuario] = useState({ nombreUsuario:'', valido: ''});
  const [contrasenia,cambiarContrasenia] = useState({campoContrasenia:'', valido: ''});


  const validacion =(valor)=>{
      
    if(expresiones.usuarioExpresion.test(usuario.nombreUsuario)){
      console.log('input correcto')
      cambiarUsuario({...usuario,nombreUsuario:valor ,valido:'true'});
      const inputUsuario = document.getElementById('inputUsuario');
      inputUsuario.style.borderColor ="#ced4da";
    
      
    }else{
      console.log('input incorrecto')
      cambiarUsuario({...usuario,nombreUsuario:valor ,valido:'false'});
      const inputUsuario = document.getElementById('inputUsuario');
      inputUsuario.style.borderColor ="#FF0000";
    
    }


}



const validacionContrasenia =(valor)=>{
      
  if(expresiones.passwordExpresion.test(contrasenia.campoContrasenia)){
    cambiarContrasenia({...contrasenia,campoContrasenia:valor ,valido:'true'});
    const inputContrasenia = document.getElementById('inputContrasenia');
    inputContrasenia.style.borderColor ="#ced4da";
 

  }else{
    console.log('input incorrecto')
    cambiarContrasenia({...contrasenia,campoContrasenia:valor ,valido:'false'});
    const inputContrasenia = document.getElementById('inputContrasenia');
    inputContrasenia.style.borderColor ="#FF0000";
  }

}

  const onChange = (e) =>{

    validacion(e.target.value);

  }

  const onChangeContrasenia = (e) =>{
    
    validacionContrasenia(e.target.value);
  
    }

    const HacerLogin =()=>{
      if(contrasenia.valido==='true'){
        if (usuario.valido ==='true'){
          console.log(contrasenia.campoContrasenia,usuario.nombreUsuario);

        }else{
          console.log('Error con el usuario')
        }

      }else{console.log('error en la contrasenia')}


    }

  return (
    
      <Container className="text-center" id="ContenedorPrincipal" >
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center mt-5 p-5">
              <img className="icon-img" src= {imagenUsuario} alt="Icono usuario"></img>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control id='inputUsuario' type="text" placeholder="Ingrese su usuario" name="usuario" value={usuario.nombreUsuario} onChange={onChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control id='inputContrasenia' type="password" placeholder="Contraseña" name="contrasenia" value={contrasenia.campoContrasenia} onChange={onChangeContrasenia}/>
              </Form.Group>
              <Button variant="primary btn-block p-2 mt-5"  onClick={HacerLogin}>
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
