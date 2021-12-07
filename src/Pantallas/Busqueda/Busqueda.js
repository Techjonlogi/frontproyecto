import 'bootstrap/dist/css/bootstrap.css';
import './Busqueda.css';

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../ComponentesVarios/Utilidades/Api/Api";
import ConfigNoAuth from "../ComponentesVarios/Utilidades/Api/Configurations/ConfigNoAuth";
import Endpoints from "../ComponentesVarios/Utilidades/Api/ApiEndpoints";
import EmptySearchResults from "../ComponentesVarios/Busqueda/EmptySearchResults";

const Busqueda = () => {
    const [ items, setItems ] = useState( [] ); 
    const [ loadedItems, setLoaded ] = useState( false );
    let { search_query } = useParams();

    useEffect( () => {
        async function sendSearchRequest() {
            await Api.get(
                Endpoints.search + "/" +  search_query,
                ConfigNoAuth
            ).then( ( response ) => {
                if( response.status === 200 ) {
                    setItems( response.data );
                    setLoaded( true );
                }
            } ).catch( ( e ) => {
                console.log( e.response.status );
                console.log( e.response.data );
            } );
        }
        sendSearchRequest();
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
                <h1>TESTING!!!!!!!</h1>
            </>
        );
    }
};

export default Busqueda;