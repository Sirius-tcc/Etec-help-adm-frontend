

import Logo from '../../assets/images/Logo.svg'
import './styles.css'

export default function Header() {
    return(
        <div id="header">
            <div className="header-content">
                <div className="logo-container">
                    <img src={Logo} className="logo" alt="Etec Help logo"/>
                    <h1>Etec Help</h1>
                </div>

                <span>Olá, administrador!</span>
            </div>
        </div>
    )
}