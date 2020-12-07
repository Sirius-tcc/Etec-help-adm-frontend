import Delete from  '../../assets/images/delete.svg'
import Classification from '../Classification'
import Subject from '../Subject'
import './styles.css'

export default function HelperItem({id, img, name, email, subjects,  helps, classification, handleDelete}){
    return (
        <div id="helper-item">
            <div className="id">
                <span>#{id}</span>
            </div>

            <div className="profile-">
                <div className="profile-photo">
                    {img && <img src={img} alt="foto"/>}
                </div>
                <Classification classification={classification} width="18px" />
            </div>
          
            <div className="info-container">
                <h2>{name}</h2>
                <h3>{email}</h3>
                {
                    subjects.map((subject, index) => (
                        <Subject 
                            key={index}
                            name={subject}
                            boxBoderRadius="30px"
                            circleWidth="10px"
                            fontSize="14px"
                            padding="0"
                            boxWidth="150px"
                        />
                    ))
                }
                <h4>Já ajudou {helps} vezes</h4>
            </div>

            <div className="delete"  onClick={handleDelete}>
                <img src={Delete} alt=""/>
            </div>
        </div>
    )
}