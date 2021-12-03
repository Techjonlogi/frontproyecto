const ConfigWithAuth = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem( 'Token' )
    }
};

export default ConfigWithAuth;