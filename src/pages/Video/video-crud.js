import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import LateralNavigation from '../../components/LateralNavigation'
import Select from '../../components/Select'
import VideoContainer from '../../components/VideoContainer'
import api from '../../services/api'


import './styles.css'
export default function VideoCrud() {

    const [ videos, setVideos ] = useState([])
    const [ topics, setTopics ] = useState([])
    const [ isSubjectSelected, setIsSubjectSelected ] = useState(false)

    useEffect(() => {
        async function fetchVideo(){
            const res = await api.get(`/Video/list/`)
            setVideos(res.data.data)
        }

        fetchVideo()
    }, [])


    return(
        <div id="video-container">
            <Header/>
            <LateralNavigation select="Video"/>
            <div className="video-container-crud">
                <div className="select-input">
                    <Select  
                        name="Matemática" 
                        options={ [ 'Todas as matérias', 'Matemática', 'Programação' ] } 
                        onChange={ (e) =>{
                            const id = e.target.value - 1

                            if(id === 0){ 
                                api.get(`/Video/list/`).then(res => {
                                    setVideos(res.data.data)
                                })

                                setIsSubjectSelected(false)
                                setTopics([])
                                return
                            }
                            api.get(`/Video/topic/${id}`).then(res => {
                                setTopics(res.data.data)
                                setIsSubjectSelected(true)
                            })
                        }}
                    />

                    <Select 
                        isObject 
                        name="Tópico" 
                        options={ topics }
                        disabled={!isSubjectSelected}
                        onChange={ (e) =>{
                            const id = e.target.value
                            api.get(`/Video/list/${id}`).then(res => {
                                setVideos(res.data.data)
                            })

                        }}
                    />
                </div>

                <div className="grid-videos">
                    {
                        videos.map( video => (
                            <VideoContainer 
                                key={video.code}
                                id={video.code}
                                img={video.icon} 
                                views={video.views}
                                title={video.title}
                            />
                        ))
                    }
                </div>                
                
            </div>
        </div>
    )
}
