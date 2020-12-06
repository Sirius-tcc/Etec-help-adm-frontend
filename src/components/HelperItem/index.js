import Delete from  '../../assets/images/delete.svg'
import Classification from '../Classification'
import Subject from '../Subject'
import './styles.css'

export default function HelperItem(){
    return (
        <div id="helper-item">
            <div className="id">
                <span>#6</span>
            </div>

            <div className="profile-photo">
                <img src="https://raw.githubusercontent.com/Sirius-tcc/Etec-Help-api/master/uploads/images/helper/1.png" alt="foto"/>
                <Classification classification={5} width="18px" />
            </div>

            <div className="info-container">
                <h2>George Hotz</h2>
                <h3>gghotz@comma.ai.com</h3>
                <Subject 
                    name="Programação" 
                    boxBoderRadius="30px"
                    circleWidth="10px"
                    fontSize="14px"
                    padding="0"
                    boxWidth="150px"
                />

                <Subject 
                    name="Matemática" 
                    boxBoderRadius="30px"
                    circleWidth="10px"
                    fontSize="14px"
                    padding="0"
                    boxWidth="150px"
                    
                />
                <h4>Já ajudou 26 vezes</h4>
            </div>

            <div className="delete">
                <img src={Delete} alt=""/>
            </div>
        </div>
    )
}