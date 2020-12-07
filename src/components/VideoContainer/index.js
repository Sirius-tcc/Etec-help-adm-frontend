import {useState, useEffect} from 'react'
import Eye from '../../assets/images/eye.svg'
import Lapis from '../../assets/images/lapis-icon.svg'
import Delete from '../../assets/images/delete.svg'



import './styles.css'
import './responsive.css'
import api from '../../services/api'
import { toast } from 'react-toastify'

function VideoContainer({img, title, views, subject, topic, id }){
    
    const [canEdit, setCanEdit] = useState(false)
    const [Title, setTitle] = useState(title)
    const get_title = title

    useEffect(() => {
        setTitle(get_title)
    }, [])

    return(
        <div id="video-container-">
            <div className="content">
                <div className="thumbnail">
                    <img src={ img } alt=""/>
                </div>
                <div className="video-info">
                    <div className="title-edit">
                        {
                            !canEdit ? (
                                <h3>{ Title }</h3>
                            ) : (
                                <textarea
                                    value={Title} 
                                    onChange={(e)=> setTitle(e.target.value)}
                                    onKeyDown={ (e) =>{
                                        if(e.key === "Escape"){
                                           setCanEdit(false)
                                           setTitle(title)
                                        }
                                        
                                        if(e.key === "Enter"){
                                            const data = {
                                                "title": Title
                                            }

                                            api.put(`/Video/update/${id}`, data).then(res =>{
                                                if(res.data.sucess){
                                                    toast.success('Video atualizado com sucesso')
                                                }else{
                                                    toast.success('Erro ao atualizar titulo de vídeo')
                                                    console.log(res.data.data)
                                                }
                                                setCanEdit(false)
                                            })
                                           
                                        }
                                    } }
                                >
                                    
                                </textarea>
                            )
                        }
                        <img className="lapis" src={ Lapis } alt="lapis" onClick={() => {
                            setCanEdit(true)
                        }}/>
                        <img className="delete" src={ Delete } alt="delete" onClick={() =>{
                            const canDelete = window.confirm('Você tem certeza que deseja excliur esse vídeo?')
                            if(!canDelete){ return }

                            api.delete(`/Video/delete/${id}`).then(res => {
                                if(res.data.sucess){
                                    toast.success('Video deletado com sucesso!')
                                    setTimeout(() =>{
                                        window.location.reload()
                                    }, 5000)
                                }else {
                                    toast.error('Erro ao deletar vídeo!')
                                    console.log(res.data.data)
                                    
                                }
                            })
                        }}/>
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