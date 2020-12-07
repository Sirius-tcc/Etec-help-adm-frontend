import React, {useEffect, useState} from 'react';
import { Redirect, Route } from 'react-router-dom';

import api from '../services/api';

function PrivateRoute(props){
    const token = localStorage.getItem('token')

    const isLogged = !!token
    const [validToken, setValidToken] = useState(true)

    useEffect(() => {
        api.get(
            '/auth/checkAuth', 
                { headers: 
                    {
                        "Authorization" : `bearer ${token}`
                    } 
                }
        ).then(res =>{

            const { data } = res.data
            setValidToken(data)
        });
    
    });

    return (
        isLogged && validToken ? (
            <Route { ...props } /> 
    
        ) : (
            <Redirect to="/login"/>
        )
    )
    
}

export default PrivateRoute