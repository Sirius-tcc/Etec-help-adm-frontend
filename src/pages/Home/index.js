import Header from '../../components/Header'
import LateralNavigation from '../../components/LateralNavigation'
import Helps from '../../components/Helps'
import Classification from '../../components/Classification'

import './styles.css'

export default function Home() {
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
                        <Helps/>
                        <Helps/>
                        <Helps/>
                        <Helps/>
                        <Helps/>
                        <Helps/>
                        <Helps/>
                        <Helps/>
                        <Helps/>
                        <Helps/>
                    </div>
                    
                    <div className="footer-help">
                        <hr/>
                        <span>200 ajudas dadas</span>
                    </div>
                </div>
            </div>
            
            
            <h2 className="detail" >Detalhes</h2>
            <div className="helps-details-container">

                <div className="first-column-detail">
                    <div className="student-container-info">
                        <h3>Estudante</h3>
                        <div className="text">
                            <h4>Nome:</h4> <span>Beatriz Vitória</span>
                        </div>
                        <div className="text">
                            <h4>E-mail:</h4> <span>beatrizvika@gmail.com</span>
                        </div>
                    </div>

                    <div className="helper-container-info">
                        <h3>Helper</h3>
                        <div className="text">
                            <h4>Nome:</h4> <span>Tiago Luchtenberg</span>
                        </div>
                        <div className="text">
                            <h4>E-mail:</h4> <span>tiagoluchtenberg@gmail.com</span>
                        </div>

                        <div className="text">
                           <h4>Matérias:</h4> <span>Programação, Matemática</span>
                        </div>
                        <div className="text">
                            <h4>Classificação:</h4>
                            <Classification width="20px" classification={ 5 } />
                        </div>
                    </div>
                </div>
                
                <div className="second-column-detail">
                    
                    <div className="help-info-detail">
                        <h3>Agendamento da ajuda</h3>
                        <div className="text">
                            <h4>Titulo:</h4> <span>Preciso de ajuda em insert</span>
                        </div>

                        <div className="text">
                            <h4>
                                Descrição: &nbsp;&nbsp;
                                <span>OI, Tiago!! eu vi um vídeo de programação explicando sobre inserts, mas eu não entendi nada. tem como você me ajudar nessa.

                                </span>
                            </h4>
                        </div>

                        <div className="text">
                            <h4>Status:</h4> <span>Fechado</span>
                        </div>
                        <div className="text">
                            <h4>Classificação:</h4>
                            <Classification width="20px" classification={ 5 } />
                        </div>

                        <div className="text">
                            <h4>Data:</h4> <span>18/12/2020</span>
                        </div>

                        <div className="text">
                            <h4>Matéria:</h4> <span>Programação</span>
                        </div>

                        <div className="text">
                            <h4>Local:</h4> <span> Biblioteca da etec </span>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}