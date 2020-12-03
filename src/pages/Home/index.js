
import Header from '../../components/Header'
import LateralNavigation from '../../components/LateralNavigation'

import './styles.css'

export default function Home() {
    return(

        <div id="home-container">
            <Header/>
            <LateralNavigation select="Home"/>
        </div>
    )
}