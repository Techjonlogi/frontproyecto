import * as Yup from 'yup';
import Expresiones from '../Regex';

const SearchInputSchema = Yup.object( {
    search_query: Yup.string()
        .max( 80 )
        .matches( Expresiones.usuarioExpresion )
        
} );

export default SearchInputSchema;