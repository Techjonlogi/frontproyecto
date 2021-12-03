export function ConvertToBase64( file ) {
    var reader = new FileReader();
    if( file ) {
        return new Promise( ( resolve ) => {
            reader.readAsDataURL( file );
            reader.onloadend = () => {
                resolve( reader.result )
            }
        } )
    }
}