import {React, useEffect, useState} from "react";
import { Row,Col,Form, Table, Button, Navbar } from "react-bootstrap";
import '../VerPublicacionEspecifica/VerPublicacion.css'
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";
import { useParams } from "react-router-dom";
import Api from "../ComponentesVarios/Utilidades/Api/Api";
import Endpoints from "../ComponentesVarios/Utilidades/Api/ApiEndpoints";




const VerpublicacionEspecifica = () => {

const {idPublicacion} = useParams();

const [publicacion, setPublicacion] = useState({clave_publicacion:'',nombre_publicacion: '',descripcion: '',calificacion_general:'',categoria: '', multimedia: '',fecha_publicacion:''});


const llenarPagina= async()=>{
    let publicacionbase = {clave_publicacion:'',nombre_publicacion: '',descripcion: '',calificacion_general:'',categoria: '', multimedia: '',fecha_publicacion:''};
    let multimedia ={clave_multimedia:'',clave_publicacion:'',multimedia:''}
    await Api.get(Endpoints.publicaciones+"/"+idPublicacion).then((res)=>{
        publicacionbase = res.data
    }).catch((e) =>
    alert("No se pudo recuperar la publicacion") 
    );

    await Api.get(Endpoints.multimedia +"/"+idPublicacion+Endpoints.obtenerMultimediaEspecifica).then((res)=>{
         multimedia = res.data;
         publicacionbase.multimedia = multimedia.multimedia;
        console.log(publicacionbase)
        setPublicacion(publicacionbase);
        console.log(publicacion);
    }).catch((e) => alert("No se pudo cargar la imagen de la publicacion"));

}

useEffect(() => {
    llenarPagina();
  }, []);





    return(
<>
<NavBar />
<section className="seccionPublicacion">
    <Row>
        <Col>
        <Form className="formInformacion">
            <Form.Group>
                <Form.Label className="basicLabel">Nombre</Form.Label>
                <Form.Control type= "text" disabled className="basicInput" placeholder={publicacion.nombre_publicacion}></Form.Control>
                <Form.Label className="basicLabel" >Informacion Publicacion</Form.Label>
                <Form.Control type= "text" disabled className="basicInput" placeholder={publicacion.descripcion}></Form.Control>
                <Form.Label className="basicLabel">Calificacion</Form.Label>
                <Form.Control type= "text" disabled className="basicInput" placeholder={publicacion.calificacion_general}></Form.Control>
                <Form.Label className="basicLabel">Fecha de la publicacion</Form.Label>
                <Form.Control type= "text" disabled className="basicInput" placeholder={publicacion.fecha_publicacion}></Form.Control>

            </Form.Group>
        </Form>
        </Col>
        
        <Col className="ColumnImage">
        <img className="SelectedImage" src={publicacion.multimedia}></img>
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
                    <th>Opciones</th>
                    
                </tr>
            </thead>

        </Table>
        <Form className="formComentarios">
        <Form.Control className="imputComentario" type="text" placeholder ="ingrese su comentario"></Form.Control>
        <Row className="wrapper">
        <Button className="btnPublicar">Comentar</Button>
        </Row>
        
        </Form>
    </Row>
</section>
</>

    );

}

export default VerpublicacionEspecifica;