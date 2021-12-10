import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card,Button } from "react-bootstrap";
import "./Card.css";



const CardPublicacion =({publication: {clave_publicacion,nombre_publicacion,descripcion,calificacion_general,categoria, multimedia,fecha_publicacion  }})=>{

const IraPublicacion =()=>{

  let url="PublicacionSeleccionada/"+clave_publicacion;
  window.location.assign(url); 

}


    return (
      <>
        <Card style={{ width: "15rem"}} className="bodyCard">
          <Card.Img className="ImageCard" variant="top" src={multimedia} />
          <Card.Body>
            <Card.Title>{nombre_publicacion}</Card.Title>
            <Card.Text>
              {descripcion}
            </Card.Text>
            <Button variant="primary" className="buttonCard"  onClick={IraPublicacion} >Ir a publicacion</Button>
          </Card.Body>
        </Card>
      </>
    );
}


export default CardPublicacion;