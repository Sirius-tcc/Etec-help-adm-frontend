import React from 'react'
import Eye from '../../assets/images/eye.svg'
import Lapis from '../../assets/images/lapis-icon.svg'
import Delete from '../../assets/images/delete.svg'



import './styles.css'
import './responsive.css'

function VideoContainer({img, title, views, subject, topic, id }){
    
    return(
        <div id="video-container-">
            <div className="content">
                <div className="thumbnail">
                    <img src={ img } alt=""/>
                </div>
                <div className="video-info">
                    <div className="title-edit">
                        <h3>{ title }</h3>
                        <img className="lapis" src={ Lapis } alt=""/>
                        <img className="delete" src={ Delete } alt=""/>
                    </div>

                    <div className="views">
                        <img src={ Eye } alt="views"/>
                        <h4>{views}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default VideoContainer