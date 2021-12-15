import { Image } from "react-bootstrap";
import imagenUsuario from "../../../Imagenes/UsuarioImagen.svg";

const ProfileImage = ( props ) => {
    if( props.fotoPerfil === null || props.fotoPerfil === "" ) {
        return (
            <Image className="ProfileImage" src={ imagenUsuario } alt="Imagen Perfil" roundedCircle></Image>
        );
    } else {
        return (
            <Image className="ProfileImage" src={ props.fotoPerfil } alt="Imagen Perfil" ></Image>
        );
    }
};

export default ProfileImage;