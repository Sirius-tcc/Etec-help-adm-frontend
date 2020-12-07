import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import LateralNavigation from '../../components/LateralNavigation'
import Helps from '../../components/Helps'
import Classification from '../../components/Classification'

import './styles.css'
import api from '../../services/api'

export default function Home(props) {

    const [ helps, setHelps ] = useState([])
    const [ help, setHelp ] = useState({})

    useEffect(() => {
        async function fetchHelps(){
           const response = await api.get('/help/list')
           setHelps(response.data.data)
        }

        async function fetchHelp(){
            const id =  Number(props.location.search.split('=')[1])
            
            const response = await api.get(`/help/show/${id}`)
            if(response.data.sucess){
                setHelp(response.data.data[0])
            }else {
            setHelp({})

            }          
        }
        

        fetchHelps()
        fetchHelp()
    }, [props])

    
    return(
        <div id="home-container">
            <Header/>
            <LateralNavigation select="Home"/>
            <div className="helps-container">
                
                <div className="content">
                    <div className="header-help">
                        <h2>Ajudas</h2>
                        <hr/>
                    </div>
                   

                    <div className="helps">
                        {
                             
                            helps.map(help => (
                                <Helps 
                                    key={help.help_code} 
                                    id={help.help_code}
                                    helperName={help.helper_name}
                                    studentName={help.student_name}
                                />
                            ))
                        }
                        
                    </div>
                    
                    <div className="footer-help">
                        <hr/>
                        <span>200 ajudas dadas</span>
                    </div>
                </div>
            </div>
            
            {  
                Object.keys(help).length > 0 ? (
                    <>
                        <h2 className="detail" >Detalhes</h2>
                        <div className="helps-details-container">

                            <div className="first-column-detail">
                                <div className="student-container-info">
                                    <h3>Estudante</h3>
                                    <div className="text">
                                        <h4>Nome:</h4> <span>{`${help.student_name} ${help.student_surname}`}</span>
                                    </div>
                                    <div className="text">
                                        <h4>E-mail:</h4> <span>{ `${help.student_email}`}</span>
                                    </div>
                                </div>

                                <div className="helper-container-info">
                                    <h3>Helper</h3>
                                    <div className="text">
                                        <h4>Nome:</h4> <span>{`${help.helper_name}`}</span>
                                    </div>
                                    <div className="text">
                                        <h4>E-mail:</h4> <span>{ `${help.helper_email}`} </span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="second-column-detail">
                                
                                <div className="help-info-detail">
                                    <h3>Agendamento da ajuda</h3>
                                    <div className="text">
                                        <h4>Titulo:</h4> <span>{help.title}</span>
                                    </div>

                                    <div className="text">
                                        <h4>
                                            Descrição: &nbsp;&nbsp;
                                            <span>
                                                {help.description}
                                            </span>
                                        </h4>
                                    </div>

                                    <div className="text">
                                        <h4>Status:</h4> <span>{help.status}</span>
                                    </div>
                                    <div className="text">
                                        <h4>Classificação:</h4>
                                        <Classification width="20px" classification={ help.classification } />
                                    </div>

                                    <div className="text">
                                        <h4>Data:</h4> <span>{help.date}</span>
                                    </div>

                                    <div className="text">
                                        <h4>Matéria:</h4> <span>{ help.subject_name }</span>
                                    </div>

                                    <div className="text">
                                        <h4>Local:</h4> <span> { help.local } </span>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </>
                ) : (<></>)
            }
            
        </div>
    )
}