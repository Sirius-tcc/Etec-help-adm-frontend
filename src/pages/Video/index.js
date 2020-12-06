import Header from '../../components/Header'
import LateralNavigation from '../../components/LateralNavigation'
import View from '../../assets/images/view.svg'
import Upload from '../../assets/images/upload.svg'
import { useHistory } from 'react-router-dom'

import './styles.css'
export default function VideoHome() {
    const { push } = useHistory()
    return(
        <div id="video-container">
            <Header/>
            <LateralNavigation select="Video"/>
            <div className="video-container-buttons">
                <button className="crud-video" onClick={ () => {
                    push('/Video/dashboard')
                }} >
                    <img src={View} alt="icone"/>
                    <h2>Ver vídeos cadastrados</h2>
                </button>

                <button className="create-video" onClick={ () => {
                    push('/Video/create')
                }}>
                    <img src={Upload} alt="icone"/>
                    <h2>Cadastrar um novo vídeo</h2>
                </button>
            </div>
        </div>
    )
}
