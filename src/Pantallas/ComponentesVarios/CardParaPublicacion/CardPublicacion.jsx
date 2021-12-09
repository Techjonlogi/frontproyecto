import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card,Button } from "react-bootstrap";



const CardPublicacion =({publication: {clave_publicacion,nombre_publicacion,descripcion,calificacion_general,categoria, multimedia,fecha_publicacion  }})=>{

const IraPublicacion =()=>{

  let url="PublicacionSeleccionada/"+clave_publicacion;
  window.location.assign(url); 

}


    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={multimedia} />
          <Card.Body>
            <Card.Title>{nombre_publicacion}</Card.Title>
            <Card.Text>
              {descripcion}
            </Card.Text>
            <Button variant="primary"  onClick={IraPublicacion} >Ir a publicacion</Button>
          </Card.Body>
        </Card>
      </>
    );
}


export default CardPublicacion;