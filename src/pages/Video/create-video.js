import Header from '../../components/Header'
import LateralNavigation from '../../components/LateralNavigation'
import InputForm from '../../components/InputForm'
import TextArea from '../../components/TextArea'
import Select from '../../components/Select'
import Upload from '../../assets/images/upload.svg'
import Button from '../../components/Button'

import './styles.css'
export default function Students() {
    return(
        <div id="video-container">
            <Header/>
            <LateralNavigation select="Video"/>
            <div className="video-container-create">
                <section className="form-content">
                    <form>
                        <h2>Enviar Vídeo</h2>

                        <hr/>

                        <div className="row second-row">
                            <InputForm
                                name="Título"
                            />
                        </div>

                        <div className="row second-row">
                            <TextArea
                                name="Descrição"
                            />
                        </div>
                        <div className="row first-row">
                            <div className="select">
                                <Select  name="Matemática" options={ [ 'Todas as matérias', 'Matemática', 'Programação' ] } />
                            </div>
                            <div className="select">
                                <Select isObject name="Tópico" options={ [ 
                                    { id: '', name: 'Todos os tópicos' }, 
                                    { id: 1, name: 'Aritmética' }, 
                                    { id: 1, name: 'Álgebra' }
                                ]}
                                />
                            </div>
                        </div>
                        <div className="row second-row">
                            <label class="upload" for="upload">
                                <img src={Upload} alt="upload"/>
                                <span>Selecionar arquivo</span>
                            </label>

                            <input type="file" id="upload" accept="video/mp4" />
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
