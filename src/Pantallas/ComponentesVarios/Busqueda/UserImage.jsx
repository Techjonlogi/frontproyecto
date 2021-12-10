import imagenUsuario from "../../../Imagenes/UsuarioImagen.svg";

const UserImage = ( props ) => {
    if( props.fotoPerfil === "" || props.fotoPerfil === null ) {
        return (
            <img className="ImagenPerfil" src={ imagenUsuario } alt="Perfil"></img>
        );
    } else {
        return (
            <img className="ImagenPerfil" src={ props.fotoPerfil } alt="Perfil"></img>
        );
    }
};

UserImage.defaultProps = {
    fotoPerfil: ""
}

export default UserImage;