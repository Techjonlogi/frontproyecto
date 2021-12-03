export function ConvertToBase64( file ) {
    var reader = new FileReader();
    if( file ) {
        reader.readAsDataURL( file );
        reader.onload = () => {
            var base = reader.result;
            console.log( base );
            return base;
        };
        reader.onerror = ( error ) => {
            console.log( "error: ", error );
        };
    }
}