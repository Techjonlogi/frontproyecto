const Expresiones = {
    usuarioExpresion: /^[a-zA-Z0-9\_\-]{4,25}$/, // Letras, numeros, guion y guion_bajo.
    nombreExpresion: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    descripcionExpresion: /^[a-zA-ZÀ-ÿ\s\.]{3,200}$/, // Letras y espacios, pueden llevar acentos.
    expresionGeneral: /^[a-zA-ZÀ-ÿ0-9\_\-\s]{3,40}$/, //Letras, numeros, guion, guion bajo y espacios.
    passwordExpresion: /^.{4,20}$/, // 4 a 12 digitos.
    correoExpresion: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefonoExpresion: /^\d{7,14}$/ // 7 a 14 numeros.
};

export default Expresiones;