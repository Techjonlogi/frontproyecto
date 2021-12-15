import { Image } from "react-bootstrap";
import imagenUsuario from "../../../Imagenes/UsuarioImagen.svg";

const UserImage = ( props ) => {
    if( props.fotoPerfil === null || props.fotoPerfil === "" ) {
        return (
            <Image className="ImagenPerfil" src={ imagenUsuario } alt="Imagen Perfil" ></Image>
        );
    } else {
        return (
            <Image className="ImagenPerfil" src={ props.fotoPerfil } alt="Imagen Perfil" ></Image>
        );
    }
};

export default UserImage;