import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import { Formik } from "formik";
import { Container, Form, Row, Col } from "react-bootstrap";
import Api from "../ComponentesVarios/Utilidades/Api/Api";
import ConfigNoAuth from "../ComponentesVarios/Utilidades/Api/Configurations/ConfigNoAuth";
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
      initialValues= { {
        nombre_usuario: '',
        contrasena: ''  
      } }
      validationSchema= { LoginInputSchema }
      onSubmit= { async ( values ) => {
        const data = {
          username: values.nombre_usuario,
          password: values.contrasena
        }

        await Api.post(
          Endpoints.login,
          data,
          ConfigNoAuth
        ).then( ( response ) => {
          if( response.status === 200 ) {
            localStorage.setItem( "Token", response.data.access_token );
            localStorage.setItem( "KeyID", response.data.clave_usuario );
            window.location.replace( "http://localhost:3000/Home" );
          }
        } ).catch( ( e ) => {
          console.log( e.response.status );
          console.log( e.response.data );
        } );
      } }
    >
      { formik => (
        <Container className="bodyLogin" id="ContenedorPrincipal" fluid>
          <Row>
            <Col className="UserInfoColumn mt-5 p-5">
              <img className="icon-img" src= { imagenUsuario } alt="Icono usuario"></img>
              <Form className="UserInputForm" onSubmit={ formik.handleSubmit }>
                <BasicFormInput groupId="formBasicEmail" label="Usuario" controlId="inputUsuario" name="nombre_usuario" placeholder="Ingrese su nombre de usuario"/>
                <BasicFormPassword groupId="formBasicPassword" label="Contraseña" controlId="inputContrasena" name="contrasena" placeholder="Contraseña"/>
                <BasicButton content="Ingresar" buttonType="submit"/>
                <Container className="LigasContainer">
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
  );
};

export default Login;