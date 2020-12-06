import Delete from  '../../assets/images/delete.svg'
import './styles.css'

export default function StudentItem(){
    return (
        <div id="student-item">
            <div className="id">
                <span>#6</span>
            </div>

            <div className="profile-photo">
                <img src="https://raw.githubusercontent.com/Sirius-tcc/Etec-Help-api/master/uploads/images/student/2.png" alt="foto"/>
            </div>

            <div className="info-container">
                <h2>Beatriz Vitória</h2>
                <h3>beatrizvika@gmail.com</h3>
                <h4>já fez 16 pedidos de ajuda</h4>
            </div>

            <div className="delete">
                <img src={Delete} alt=""/>
            </div>
        </div>
    )
}