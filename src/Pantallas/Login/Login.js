import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import React,{useState} from "react";
import { Formik } from "formik";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Api from "../ComponentesVarios/Utilidades/Api/Api";
import ConfigNoAuth from "../ComponentesVarios/Utilidades/Api/ApiConfigurations";
import Endpoints from "../ComponentesVarios/Utilidades/Api/ApiEndpoints";
import LoginInputSchema from "../ComponentesVarios/Utilidades/ValidationSchemas/LoginInputSchema";
import imagenUsuario from "../../Imagenes/UsuarioImagen.svg";
import imagenFondo from "../../Pantallas/Login/Imagenes/LoginImagen.jpeg";
import BasicFormInput from "../ComponentesVarios/EntradaUsuario/BasicFormInput";
import BasicFormPassword from "../ComponentesVarios/EntradaUsuario/BasicFormPassword";
import BasicButton from "../ComponentesVarios/Botones/BasicButton";



const Login = () => {
  return (
    <Formik
      InitialValues= { {
        nombre_usuario: '',
        contrasena: ''  
      } }
      validationSchema= { LoginInputSchema }
      onSubmit= { async ( values ) => {
        const data = {
          username: values.nombre_usuario,
          password: values.contrasena
        }

        await Api.post()
      } }
    >
      { formik => (
        <Container className="bodyLogin" id="ContenedorPrincipal" fluid>
          <Row>
            <Col className="UserInfoColumn mt-5 p-5">
              <img className="icon-img" src= { imagenUsuario } alt="Icono usuario"></img>
              <Form onSubmit={ formik.handleSubmit }>
                <BasicFormInput groupId="formBasicEmail" label="Usuario" controlId="inputUsuario" name="nombre_usuario" placeholder="Ingrese su nombre de usuario"/>
                <BasicFormPassword groupId="formBasicPassword" label="Contraseña" controlId="inputContrasena" name="contrasena" placeholder="Contraseña"/>
                <BasicButton content="Ingresar"/>
                <Container>
                  <a href="/Login"><small className="reset">Recuperar Contraseña</small></a>
                  <a href="/Register"><small className="reset ml-2" >Registrate</small></a>
                </Container>
              </Form>
            </Col>
            <Col>
              <img src={imagenFondo} alt="" id="ImagenFondo" ></img>
            </Col>
          </Row>
        </Container>
      ) }
    </Formik>
      // <Container className="bodyLogin" id="ContenedorPrincipal" fluid>
      //   <Row>
      //     <Col  className="text-center mt-5 p-5">
      //         <img className="icon-img" src= {imagenUsuario} alt="Icono usuario"></img>
      //       <Form>
      //         <Form.Group className="mb-3" controlId="formBasicEmail">
      //           <Form.Label>Usuario</Form.Label>
      //           <Form.Control id='inputUsuario' type="text" placeholder="Ingrese su usuario" name="usuario" value={usuario.nombreUsuario} onChange={onChange} />
      //         </Form.Group>

      //         <Form.Group className="mb-3" controlId="formBasicPassword">
      //           <Form.Label>Contraseña</Form.Label>
      //           <Form.Control id='inputContrasenia' type="password" placeholder="Contraseña" name="contrasenia" value={contrasenia.campoContrasenia} onChange={onChangeContrasenia}/>
      //         </Form.Group>
      //         <Button variant="primary btn-block p-2 mt-5"  onClick={HacerLogin}>
      //           Ingresar
      //         </Button>
      //         <div className="text-center mt-3" >
      //             <a href="/Login"><small className="reset">Recuperar Contraseña</small></a> ||
      //             <a href="/Register"><small className="reset ml-2" >Registrate</small></a>
      //         </div>
            
      //       </Form>
      //     </Col>
      //     <Col >
      //         <img src={imagenFondo} alt="" id="ImagenFondo">
      //         </img>
      //     </Col>
      //   </Row>
      // </Container>
    
  );
};

export default Login;