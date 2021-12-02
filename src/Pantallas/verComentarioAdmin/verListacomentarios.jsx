import { Container,Tab,Table } from "react-bootstrap";
import NavBar from "../ComponentesVarios/BarraNavegacion/NavBar";





const verComentariosAdmin =()=>{

    return(
        <div>
        <Container>
            <Table striped bordered hover className="tablaComentarios">
            <thead>
                <tr>
                    <th>usuario</th>
                    <th>Comentario</th>
                    <th>Opciones</th>
                    
                </tr>
            </thead>
            </Table>
        </Container>

        </div>
      

   

    );


}

export default verComentariosAdmin;