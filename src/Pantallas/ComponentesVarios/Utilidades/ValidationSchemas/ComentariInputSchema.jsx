import * as Yup from 'yup';
import Expresiones from '../Regex';

const ComentariInputSchema = Yup.object( {
    comentario: Yup.string()
        .max( 100 )
        .matches( Expresiones.expresionGeneral )
        .required('Ingrese algo para comentar')
} );

export default ComentariInputSchema;