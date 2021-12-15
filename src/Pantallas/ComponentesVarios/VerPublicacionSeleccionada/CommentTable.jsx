import { Table } from 'react-bootstrap';

const CommentTable = ( props ) => {
    return (
        <>
            <Table striped bordered hover className="tablaComentarios">
                <thead>
                    <tr>
                        <th>usuario</th>
                        <th>Comentario</th>                   
                    </tr>
                </thead>
                <tbody>
                { props.comentarios.map( ( comentario, index ) => (
                    <tr key={ index }>
                        <td>{ comentario.nombre_usuario }</td>
                        <td>{ comentario.comentario }</td>
                    </tr>
                ) ) }
                </tbody>
            </Table>
        </>
    );
};

CommentTable.defaultProps = {
    comentarios: []
}

export default CommentTable;