import * as Yup from 'yup';
import Expresiones from '../Regex';

const RegisterInputSchema = Yup.object( {
    nombres: Yup.string()
        .min( 3, 'Debe tener por lo menos 3 caracteres.' )
        .max( 40, 'Debe tener 40 caracteres o menos.')
        .matches( Expresiones.nombreExpresion, 'Nombres inválidos' )
        .required( 'Requerido' ),
    apellidos: Yup.string()
        .min( 3, 'Debe tener por lo menos 3 caracteres.' )
        .max( 40, 'Debe tener 40 caracteres o menos.')
        .matches( Expresiones.nombreExpresion, 'Apellidos inválidos' )
        .required( 'Requerido' ),
    nombre_usuario: Yup.string()
        .min( 3, 'Debe tener por lo menos 3 caracteres.' )
        .max( 25, 'Debe tener 25 caracteres o menos.')
        .matches( Expresiones.usuarioExpresion, 'Nombre de usuario inválido' )
        .required( 'Requerido' ),
    correo_electronico: Yup.string()
        .email( 'Correo inválido' )
        .matches( Expresiones.correoExpresion, 'Correo inválido' )
        .required( 'Correo requerido' ),
    contrasena: Yup.string()
        .min( 6, 'La contraseña debe tener por lo menos 6 caracteres.' )
        .matches( Expresiones.passwordExpresion, 'Contraseña inválida' )
        .required( 'Contraseña requerida' ),
    confirmar_contrasena: Yup.string()
        .oneOf( [ Yup.ref( 'contrasena' ), null ], 'Las contraseñas deben coincidir')
        .required( 'Por favor confirme su contraseña' ),
} );

export default RegisterInputSchema;