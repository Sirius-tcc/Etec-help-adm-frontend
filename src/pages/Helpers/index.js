import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import LateralNavigation from '../../components/LateralNavigation'

import HelperItem from '../../components/HelperItem'
import api from '../../services/api'
import { toast } from 'react-toastify'

import './styles.css'


export default function Helpers() {

    const [helpers, setHelpers] = useState([])

    useEffect(() => {
        async function fetchStudents(){
            const response = await api.get('/helper/list')

            setHelpers(response.data.data)
        }

        fetchStudents()
    })

    return(
        <div id="helper-container">
            <Header/>
            <LateralNavigation select="Helper"/>
            <div className="helper-list">
                <div className="content">
                    {
                        helpers.map(helper => (
                            <HelperItem
                                key={helper.code}
                                id={helper.code}
                                email={helper.email}
                                helps={ helper.helps }
                                name={ `${helper.name} ${helper.surname}` }
                                img={ helper.photo }
                                subjects={ helper.subjects }
                                classification={ helper.classification }
                                handleDelete={ async () => {
                                    const canDelete = window.confirm('Deseja realmente deletar esse usuário?')
                                    if(!canDelete){ return }
                                    console.log(helper.code)
                                    const res = await api.delete(`/helper/delete/${helper.code}`)
                                    console.log(res.data)
                                    if(res.data.sucess){
                                        toast.success('Helper deletado com sucesso!')
                                    }else {
                                        toast.error('Erro ao deletar helper!')
                                        console.log(res.data.data)
                                    }
                                }}
                            />
                        ))
                    }
                </div>
                
            </div>
        </div>
    )
}
