import { Formik } from "formik";
import { Form, Row, Button } from "react-bootstrap";
import Api from "../Utilidades/Api/Api";
import Endpoints from "../Utilidades/Api/ApiEndpoints";
import ComentariInputSchema from "../Utilidades/ValidationSchemas/ComentariInputSchema";
import ConfigWithAuth from "../Utilidades/Api/Configurations/ConfigWithAuth";
import BasicFormInput from "../EntradaUsuario/BasicFormInput";

const UserCommentInput = ( props ) => {
    return (
        <>
            <Formik
                initialValues={ {
                    comentario: ''
                } }
                validationSchema={ ComentariInputSchema }
                onSubmit={ async ( values ) => {
                    const data = {
                        comentario: values.comentario,
                        clave_publicacion: props.idPublicacion,
                        clave_usuario: localStorage.getItem( "KeyID" )
                    }

                    if( localStorage.getItem( "KeyID" ) === null || localStorage.getItem( "Token" ) === "" ){
                        alert( "Inicia Sesión primero para poder comentar" )
                    } else {
                        Api.post( 
                            Endpoints.comentario, 
                            data, 
                            ConfigWithAuth 
                        ).then( ( res ) => {
                            if( res.status === 201 ) {
                                window.location.assign( "/PublicacionSeleccionada/" + props.idPublicacion ); 
                            }
                        } ).catch( ( e ) => {
                            alert( "Hubo un error en el registro" )
                        } ) 
                    }
                } }
            >
            { formik => (
                <Form className="formComentarios"  onSubmit={ formik.handleSubmit }>
                    <BasicFormInput labelId="etiquetaComentario" controlId="controlComentario" label="" name="comentario" placeholder="ingrese su comentario"/>
                    <Row className="wrapper">
                        <Button className="btnPublicar" type="submit" >Comentar</Button>
                    </Row>
                </Form>
            ) }
            </Formik>
        </>
    );
};

export default UserCommentInput;