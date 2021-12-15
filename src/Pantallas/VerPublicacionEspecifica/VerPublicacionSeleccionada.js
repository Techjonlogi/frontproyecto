import '../VerPublicacionEspecifica/VerPublicacion.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";
import Api from "../ComponentesVarios/Utilidades/Api/Api";
import Endpoints from "../ComponentesVarios/Utilidades/Api/ApiEndpoints";
import UserCommentInput from "../ComponentesVarios/VerPublicacionSeleccionada/UserCommentInput";
import CommentTable from "../ComponentesVarios/VerPublicacionSeleccionada/CommentTable";
import PublicationDetails from "../ComponentesVarios/VerPublicacionSeleccionada/PublicationDetails";

const VerPublicacionSeleccionada = () => {
    const { idPublicacion } = useParams();
    const [ publicacion, setPublicacion ] = useState( [] );
    const [ comentarios, setComentarios ] = useState( [] );

    const llenarPagina = async () => {
        await Api.get( Endpoints.publicaciones + "/" + idPublicacion ).then( ( res ) => {
            setPublicacion( res.data );
        } ).catch( ( e ) =>
            alert("No se pudo recuperar la publicacion") 
        );
    }

    const llenarComentarios = async () => {
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
            <Container className="seccionPublicacion">
                <Row>
                <Col>
                    <PublicationDetails publicacion={ publicacion }/>
                </Col>
                <Col className="ColumnImage">
                    <img className="SelectedImage" src={ publicacion.multimedia } alt="imagen"></img>
                </Col>
                </Row>
            </Container>
            <Container className="seccionComentarios" fluid>
                <Row className="rowComentarioInput">
                    <UserCommentInput idPublicacion={ idPublicacion }/>
                </Row>
                <Row className="rowTablaComentarios">
                    <CommentTable comentarios={ comentarios }/>
                </Row>
            </Container>
        </>
    );
};

export default VerPublicacionSeleccionada;