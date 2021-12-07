import 'bootstrap/dist/css/bootstrap.css';
import './Busqueda.css';

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../ComponentesVarios/Utilidades/Api/Api";
import ConfigNoAuth from "../ComponentesVarios/Utilidades/Api/Configurations/ConfigNoAuth";
import Endpoints from "../ComponentesVarios/Utilidades/Api/ApiEndpoints";
import EmptySearchResults from "../ComponentesVarios/Busqueda/EmptySearchResults";
import FilledSearchResults from "../ComponentesVarios/Busqueda/FilledSearchResults";

const Busqueda = () => {
    const [ publicaciones, setPublicaciones ] = useState( [] ); 
    const [ usuarios, setUsuarios ] = useState( [] );
    const [ loadedItems, setLoaded ] = useState( false );
    let { search_query } = useParams();

    useEffect( () => {
        async function sendPublicationSearchRequest() {
            await Api.get(
                Endpoints.search + "/" +  search_query,
                ConfigNoAuth
            ).then( ( response ) => {
                if( response.status === 200 ) {
                    setPublicaciones( response.data );
                    setLoaded( true );
                }
            } ).catch( ( e ) => {
                console.log( e.response.status );
                console.log( e.response.data );
            } );
        }
        sendPublicationSearchRequest();
    } );

    if( !loadedItems ) {
        return (
            <>
                <EmptySearchResults />
            </>
        );
    } else {
        return (
            <>
                <FilledSearchResults publicaciones={ publicaciones } />
            </>
        );
    }
};

export default Busqueda;