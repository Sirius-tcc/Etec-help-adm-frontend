import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Header from '../../components/Header'
import LateralNavigation from '../../components/LateralNavigation'
import StudentItem from '../../components/StudentItem'
import api from '../../services/api'

import './styles.css'
export default function Students() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        async function fetchStudents(){
            const response = await api.get('/Student/list')

            setStudents(response.data.data)
        }

        
        fetchStudents()
    })


    return(
        <div id="students-container">
            <Header/>
            <LateralNavigation select="Student"/>
            <div className="student-list">
                <div className="content">
                    {
                        students.map(student => (
                            <StudentItem
                                key={ student.code }
                                id={ student.code }
                                img={ student.photo }
                                name={ `${student.name} ${student.surname}` }
                                email={ student.email }
                                asked_helps={ student.asked_help }
                                handleDelete={ async () => {
                                    const canDelete = window.confirm('Deseja realmente deletar esse usuário?')
                                    if(!canDelete){ return }
                                    console.log(student.code)
                                    const res = await api.delete(`/student/delete/${student.code}`)
                                    console.log(res.data)
                                    if(res.data.sucess){
                                        toast.success('Estudante deletado com sucesso!')
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
