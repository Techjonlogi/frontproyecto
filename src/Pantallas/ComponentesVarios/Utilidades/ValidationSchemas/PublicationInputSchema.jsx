import * as Yup from 'yup';
import Expresiones from '../Regex';

const PublicationinputSchema = Yup.object( {
    nombre_publicacion: Yup.string()
        .min( 3, 'Debe tener por lo menos 3 caracteres.' )
        .max( 40, 'Debe tener 40 caracteres o menos.')
        .matches( Expresiones.nombreExpresion, 'Nombres inválidos' )
        .required( 'Por favor introduzca el nombre de su publicación' ),
    descripcion_publicacion: Yup.string()
        .min( 3, 'Debe tener por lo menos 3 caracteres.' )
        .max( 200, 'Debe tener 200 caracteres o menos.')
        .matches( Expresiones.nombreExpresion, 'Nombres inválidos' )
        .required( 'Por favor introduzca una descripción' ),
    categoria: Yup.number( 'Por favor seleccione una categoria' )
        .required( 'Por favor seleccione una categoria' )
        .min( 0 )
        .max( 20 )
        .integer(),
    archivo: Yup.mixed()
        .required( 'Por favor selecciona un archivo' )
} );

export default PublicationinputSchema;