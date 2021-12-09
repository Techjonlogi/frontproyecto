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
                Endpoints.searchPublicaciones + "/" +  search_query,
                ConfigNoAuth
            ).then( ( response ) => {
                if( response.status === 200 ) {
                    console.log( response.data );
                    setPublicaciones( response.data );
                    setLoaded( true );
                }
            } ).catch( ( e ) => {} );
        }

        async function sendUsuarioSearchRequest() {
            await Api.get(
                Endpoints.searchUsuarios + "/" +  search_query,
                ConfigNoAuth
            ).then( ( response ) => {
                if( response.status === 200 ) {
                    setUsuarios( response.data );
                    setLoaded( true );
                }
            } ).catch( ( e ) => {} );
        }

        sendPublicationSearchRequest();
        sendUsuarioSearchRequest();
    }, [ search_query ] );

    if( !loadedItems ) {
        return (
            <>
                <EmptySearchResults />
            </>
        );
    } else {
        return (
            <>
                <FilledSearchResults publicaciones={ publicaciones } usuarios={ usuarios }/>
            </>
        );
    }
};

export default Busqueda;