import React, {useEffect, useState} from 'react';
import { Redirect, Route } from 'react-router-dom';
import Login from '../pages/Login';
import api from '../services/api';



function HomeRoute(props){
    const token = localStorage.getItem('token')

    
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
            console.log(data)
        });
    });

   
    if(validToken){
        return  <Redirect to={`/Home`}/>
    }

    return  <Redirect to={`/login`}/>

}


export default HomeRoute