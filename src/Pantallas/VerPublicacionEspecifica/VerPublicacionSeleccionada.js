import '../VerPublicacionEspecifica/VerPublicacion.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";
import Api from "../ComponentesVarios/Utilidades/Api/Api";
import Endpoints from "../ComponentesVarios/Utilidades/Api/ApiEndpoints";
import UserCommentInput from "../ComponentesVarios/VerPublicacionSeleccionada/UserCommentInput";
import CommentTable from "../ComponentesVarios/VerPublicacionSeleccionada/CommentTable";
import PublicationDetails from "../ComponentesVarios/VerPublicacionSeleccionada/PublicationDetails";

const VerPublicacionSeleccionada = () => {
    const { idPublicacion } = useParams();
    const [ publicacion, setPublicacion ] = useState( { clave_publicacion:'',nombre_publicacion: '',descripcion: '',calificacion_general:'',categoria: '', multimedia: '',fecha_publicacion:''} );
    const [ comentarios, setComentarios ] = useState( [] );

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
                    <PublicationDetails publicacion={ publicacion }/>
                </Col>
                <Col className="ColumnImage">
                    <img className="SelectedImage" src={ publicacion.multimedia } alt="imagen"></img>
                </Col>
                </Row>
            </section>
            <section className="seccionComentarios">
                <Row className="divTablaComentarios">
                    <CommentTable comentarios={ comentarios }/>
                    <UserCommentInput idPublicacion={ idPublicacion }/>
                </Row>
            </section>
        </>
    );
};

export default VerPublicacionSeleccionada;