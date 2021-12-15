import { Image } from "react-bootstrap";
import ImagenPerfil from "../../../Imagenes/UsuarioImagen.svg";

const UserImage = ( props ) => {
    return (
        <Image className="ImagenPerfil" src={ props.fotoPerfil } alt="Imagen Perfil"></Image>
    );
};

UserImage.defaultProps = {
    fotoPerfil: ImagenPerfil
}

export default UserImage;