import '../VerPublicacionEspecifica/VerPublicacion.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Form, Table, Button } from "react-bootstrap";
import { Formik, Field } from "formik";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";
import Api from "../ComponentesVarios/Utilidades/Api/Api";
import Endpoints from "../ComponentesVarios/Utilidades/Api/ApiEndpoints";
import ComentariInputSchema from "../ComponentesVarios/Utilidades/ValidationSchemas/ComentariInputSchema";
import ConfigWithAuth from "../ComponentesVarios/Utilidades/Api/Configurations/ConfigWithAuth";

const VerPublicacionSeleccionada = () => {
    const { idPublicacion } = useParams();
    const [ publicacion, setPublicacion ] = useState( { clave_publicacion:'',nombre_publicacion: '',descripcion: '',calificacion_general:'',categoria: '', multimedia: '',fecha_publicacion:''} );
    const [ comentarios,setComentarios ] = useState( [] );

    const llenarPagina= async()=>{
        let publicacionbase = {clave_publicacion:'',nombre_publicacion: '',descripcion: '',calificacion_general:'',categoria: '', multimedia: '',fecha_publicacion:''};
        let multimedia={ clave_multimedia:'',clave_publicacion:'',multimedia:''}
        await Api.get( Endpoints.publicaciones + "/" + idPublicacion ).then( ( res ) => {
            publicacionbase = res.data
        } ).catch( ( e ) =>
            alert("No se pudo recuperar la publicacion") 
        );

        await Api.get( Endpoints.multimedia + "/" + idPublicacion + Endpoints.obtenerMultimediaEspecifica
        ).then( ( res ) => {
            multimedia = res.data;
            publicacionbase.multimedia = multimedia.multimedia;
            setPublicacion( publicacionbase );
        } ).catch( ( e ) => alert( "No se pudo cargar la imagen de la publicacion" ) );
    }

    const llenarComentarios = async()=>{
        await Api.get( Endpoints.comentario + "/" + idPublicacion ).then( ( res ) => {
            setComentarios( res.data );
        } ).catch( ( e ) => (
            alert( "Error al recuperar los comentarios" )
        ) )
    }

    useEffect( () => {
        llenarPagina();
        llenarComentarios()
    }, [] );

    return(
        <>
            <NavBar />
            <section className="seccionPublicacion">
                <Row>
                <Col>
                <Form className="formInformacion">
                    <Form.Group>
                        <Form.Label className="basicLabel">Nombre</Form.Label>
                        <Form.Control type= "text" disabled className="basicInput" placeholder={ publicacion.nombre_publicacion }></Form.Control>
                        <Form.Label className="basicLabel" >Informacion Publicacion</Form.Label>
                        <Form.Control type= "text" disabled className="basicInput" placeholder={ publicacion.descripcion }></Form.Control>
                        <Form.Label className="basicLabel">Calificacion</Form.Label>
                        <Form.Control type= "text" disabled className="basicInput" placeholder={ publicacion.calificacion_general }></Form.Control>
                        <Form.Label className="basicLabel">Fecha de la publicacion</Form.Label>
                        <Form.Control type= "text" disabled className="basicInput" placeholder={ publicacion.fecha_publicacion }></Form.Control>
                    </Form.Group>
                </Form>
                </Col>
                <Col className="ColumnImage">
                    <img className="SelectedImage" src={ publicacion.multimedia } alt="imagen"></img>
                </Col>
                </Row>
            </section>
            <section className="seccionComentarios">
                <Row className="divTablaComentarios">
                    <Table striped bordered hover className="tablaComentarios">
                        <thead>
                            <tr>
                                <th>usuario</th>
                                <th>Comentario</th>                   
                            </tr>
                        </thead>
                        { comentarios.map( comentario => (
                        <tbody>
                            <tr>
                                <td>{ comentario.clave_usuario }</td>
                                <td>{ comentario.comentario }</td>
                            </tr>
                        </tbody>
                        ) ) }
                    </Table>
                    <Formik
                        initialValues={ {
                            comentario: ''
                        } }
                        validationSchema={ ComentariInputSchema }
                        onSubmit={ async ( values ) => {
                            const data = {
                                comentario: values.comentario,
                                clave_publicacion: idPublicacion,
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
                                        let url="/PublicacionSeleccionada/" + idPublicacion;
                                        window.location.assign( url ); 
                                    }
                                } ).catch( ( e ) => {
                                    alert( "Hubo un error en el registro" )
                                } ) }
                        } }
                    >
                    { formik => (
                        <Form className="formComentarios"  onSubmit={formik.handleSubmit}>
                            <Field className="imputComentario" type="text" placeholder ="ingrese su comentario" name="comentario"></Field>
                            <Row className="wrapper">
                            <Button className="btnPublicar" type="submit" >Comentar</Button>
                            </Row>
                        </Form>
                    ) }
                    </Formik>
                </Row>
            </section>
        </>
    );
};

export default VerPublicacionSeleccionada;