import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function Helps({id, helperName, studentName}){

    return(
       
            <div id="help-content">
                <Link to={`/Home?id=${id}`} >
                    <h1>{`${id}  - ${helperName} ajudou ${studentName}`}</h1>
                </Link>
            </div>
    )
}