import * as Yup from 'yup';
import Expresiones from '../Regex';

const ComentariInputSchema = Yup.object( {
    comentario: Yup.string()
        .max( 100, "Limite de caracteres alcanzado." )
        .matches( Expresiones.expresionGeneral, 'Comentario inválido.' )
        .required('Ingrese algo para comentar')
} );

export default ComentariInputSchema;