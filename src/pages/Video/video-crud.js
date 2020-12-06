import Header from '../../components/Header'
import LateralNavigation from '../../components/LateralNavigation'
import Select from '../../components/Select'
import VideoContainer from '../../components/VideoContainer'


import './styles.css'
export default function VideoCrud() {
    return(
        <div id="video-container">
            <Header/>
            <LateralNavigation select="Video"/>
            <div className="video-container-crud">
                <div className="select-input">
                    <Select  name="Matemática" options={ [ 'Todas as matérias', 'Matemática', 'Programação' ] } />
                    <Select isObject name="Tópico" options={ [ 
                        { id: '', name: 'Todos os tópicos' }, 
                        { id: 1, name: 'Aritmética' }, 
                        { id: 1, name: 'Álgebra' }
                    ]}
                    />
                </div>

                <div className="grid-videos">
                    <VideoContainer 
                        id={1}
                        img="https://raw.githubusercontent.com/Sirius-tcc/Etec-Help-api/5c1f0c83e4c9000a5017ce43f5950dfc07a2858e/uploads/images/icon/1.svg"  
                        views={100}
                        title="Soma, como somar"
                    />

                    <VideoContainer 
                        id={1}
                        img="https://raw.githubusercontent.com/Sirius-tcc/Etec-Help-api/5c1f0c83e4c9000a5017ce43f5950dfc07a2858e/uploads/images/icon/1.svg"  
                        views={100}
                        title="Soma, como somar"
                    />

                    <VideoContainer 
                        id={1}
                        img="https://raw.githubusercontent.com/Sirius-tcc/Etec-Help-api/5c1f0c83e4c9000a5017ce43f5950dfc07a2858e/uploads/images/icon/1.svg"  
                        views={100}
                        title="Soma, como somar"
                    />

                    <VideoContainer 
                        id={1}
                        img="https://raw.githubusercontent.com/Sirius-tcc/Etec-Help-api/5c1f0c83e4c9000a5017ce43f5950dfc07a2858e/uploads/images/icon/1.svg"  
                        views={100}
                        title="Soma, como somar"
                    />
                </div>                
                
            </div>
        </div>
    )
}
