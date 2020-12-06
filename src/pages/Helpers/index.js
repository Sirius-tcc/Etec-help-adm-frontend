import Header from '../../components/Header'
import LateralNavigation from '../../components/LateralNavigation'

import HelperItem from '../../components/HelperItem'

import './styles.css'
export default function Helpers() {
    return(
        <div id="helper-container">
            <Header/>
            <LateralNavigation select="Helper"/>
            <div className="helper-list">
                <div className="content">
                    <HelperItem/>
                    <HelperItem/>
                    <HelperItem/>
                    <HelperItem/>
                    <HelperItem/>
                </div>
                
            </div>
        </div>
    )
}
