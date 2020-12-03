import Home from '../../assets/images/home.svg'
import Student from '../../assets/images/student.svg'
import Helper from '../../assets/images/helper.svg'
import Video from '../../assets/images/video.svg'
import Logout from '../../assets/images/logout.svg'

import './styles.css'

export default function LateralNavigation( { select }) {
    return(
        <div id="lateral-navigation">
          <div className="navigation-content">
            <img src={Home} className={select === "Home" ? 'select' : 'normal'} alt="home"/>
            <img src={Student} className={select === "Student" ? 'select' : 'normal'} alt="estudante"/>
            <img src={Helper} className={select === "Helper" ? 'select' : 'normal'} alt="helper"/>
            <img src={Video} className={select === "Video" ? 'select' : 'normal'} alt="videos"/>
            <img src={Logout} className="logout" alt="logout"/>
          </div>
        </div>
    )
}