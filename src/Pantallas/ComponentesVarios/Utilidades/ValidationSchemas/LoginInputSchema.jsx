import * as Yup from 'yup';
import Expresiones from '../Regex';

const LoginInputSchema = Yup.object( {
    nombre_usuario: Yup.string()
        .min( 3, 'Debe tener por lo menos 3 caracteres.' )
        .max( 25, 'Debe tener 25 caracteres o menos.')
        .matches( Expresiones.usuarioExpresion, 'Nombre de usuario inválido' )
        .required( 'Requerido' ),
    contrasena: Yup.string()
        .min( 6, 'La contraseña debe tener por lo menos 6 caracteres.' )
        .matches( Expresiones.passwordExpresion, 'Contraseña inválida' )
        .required( 'Contraseña requerida' )
} );

export default LoginInputSchema;