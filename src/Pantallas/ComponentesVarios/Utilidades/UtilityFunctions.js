export function ConvertToBase64( file ) {
    var reader = new FileReader();
    if( file ) {
        reader.readAsDataURL( file );
        reader.onload = () => {
            return reader.result;
        };
        reader.onerror = ( error ) => {
            console.log( "error: ", error );
        };
    }
}