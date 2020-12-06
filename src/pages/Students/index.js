import Header from '../../components/Header'
import LateralNavigation from '../../components/LateralNavigation'

import StudentItem from '../../components/StudentItem'

import './styles.css'
export default function Students() {
    return(
        <div id="students-container">
            <Header/>
            <LateralNavigation select="Student"/>
            <div className="student-list">
                <div className="content">
                    <StudentItem/>
                    <StudentItem/>
                    <StudentItem/>
                    <StudentItem/>
                    <StudentItem/>
                </div>
                
            </div>
        </div>
    )
}
