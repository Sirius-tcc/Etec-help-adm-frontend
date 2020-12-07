import { useState } from 'react'


import Header from '../../components/Header'
import LateralNavigation from '../../components/LateralNavigation'
import InputForm from '../../components/InputForm'
import TextArea from '../../components/TextArea'
import Select from '../../components/Select'
import Upload from '../../assets/images/upload.svg'
import Button from '../../components/Button'
import { toast } from 'react-toastify';

import { useHistory } from 'react-router-dom'

import api from '../../services/api'
import './styles.css'

export default function Students() {

    const [ isSubjectSelected, setIsSubjectSelected ] = useState(false)
    const [ topics, setTopics ] = useState([])

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ video, setVideo ] = useState([])
    const [ topic, setTopic ] = useState(null)


    const { push } = useHistory() 
    const handleCreateVideo = (e) => {
        e.preventDefault()

        if(title.length > 60){
            toast.error(`O título só pode ter no máximo 60 caracteres. Você digitou ${title.length }`)
            return
        }
        if(title.length < 1){
            toast.error(`Por favor, digite algum título!`)
            return
        }

        if(description.length > 3000){
            toast.error(`O título só pode ter no máximo 3000 caracteres. Você digitou ${description.length}`)
            return
        }

        if(description.length > 3000){
            toast.error(`A descrição só pode ter no máximo 3000 caracteres. Você digitou ${description.length}`)
            return
        }

        if(topic === null){
            toast.error(`Por favor, Selecione algum tópico!`)
            return
        }

        if(video.length === 0){
            toast.error(`Por favor, Selecione um vídeo`)
            return
        }
        console.log(topic)
     
        const data = new FormData();
        
        data.append('video', video)
        data.append('title', title)
        data.append('description', description)
        data.append('code_topic', topic)

        api.post('/Video/create', data).then(res => {
            if(res.data.sucess){
                toast.success('Video cadastrado com sucesso!')
                push('/Video/dashboard')
            }
        })
    }

    const handleSelectImages = (event) => {
        if (!event.target.files) return;
    
        const selectedVideo = event.target.files[0];
    
        setVideo(selectedVideo);
    };
    

    return(
        <div id="video-container">
            <Header/>
            <LateralNavigation select="Video"/>
            <div className="video-container-create">
                <section className="form-content">
                    <form onSubmit={handleCreateVideo} >
                        <h2>Enviar Vídeo</h2>

                        <hr/>

                        <div className="row second-row">
                            <InputForm
                                name="Título"
                                onChange={ e =>  setTitle(e.target.value.trim())}
                            />
                        </div>

                        <div className="row second-row">
                            <TextArea
                                name="Descrição"
                                onChange={ e =>  setDescription(e.target.value.trim())}
                            />
                        </div>
                        <div className="row first-row">
                            <div className="select">
                                <Select  
                                    name="Matemática" options={ ['Matemática', 'Programação' ] } 
                                    onChange={ (e) => {
                                        api.get(`/Video/topic/${e.target.value}`).then(res => {
                                            setTopics(res.data.data)
                                            setIsSubjectSelected(true)
                                        })
                                    }}
                                />
                            </div>
                            <div className="select">
                                <Select isObject name="Tópico" 
                                    disabled={!isSubjectSelected}
                                    options={ topics }
                                    onChange={ (e) =>  setTopic(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="row second-row">
                            <label class="upload" for="upload">
                                <img src={Upload} alt="upload"/>
                                <span>Selecionar arquivo</span>
                            </label>

                            <input type="file" id="upload" accept="video/mp4" 
                                   onChange={ e =>  handleSelectImages(e)}
                            />
                        </div>
                        <div className="button-send">
                            <Button buttonName="Salvar vídeo" />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}
