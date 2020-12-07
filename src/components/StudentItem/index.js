import Delete from  '../../assets/images/delete.svg'
import './styles.css'

export default function StudentItem({id, img, name, email, asked_helps, handleDelete}){
    return (
        <div id="student-item">
            <div className="id">
                <span>#{id}</span>
            </div>

            <div className="profile-photo">
                {img ? (<img src={ img } alt="foto"/>) : (<></>)}
            </div>

            <div className="info-container">
                <h2>{name}</h2>
                <h3>{email}</h3>
                <h4>já fez { asked_helps } pedidos de ajuda</h4>
            </div>

            <div className="delete" onClick={ handleDelete }>
                <img src={Delete} alt=""/>
            </div>
        </div>
    )
}