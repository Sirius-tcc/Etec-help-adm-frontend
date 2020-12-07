import React, {useState} from 'react'
import Logo from '../../assets/images/Logo.svg'
import { useHistory } from 'react-router-dom'
import InputLogin from '../../components/InputLogin'
import Button from '../../components/Button'
import ImageApresentation from '../../components/ImageApresentation'
import api from '../../services/api'
import { toast } from 'react-toastify';

import './styles.css'
import './responsive.css'



function LoginHelper(){


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const { push } = useHistory()

    async function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        const __data = {
            email,
            password
        }
        console.log(__data)
        const response = await api.post('/adm/login', __data)
        
        const { data } = response
        
        if(data.sucess){
            // get payload from the token
            const token = data.data
            localStorage.setItem('token', token)
            const url = `/Home`
            push(url)

        }else{
            toast.error('E-mail ou senha estão incorretos!', { position: "top-left" })
        }

        setLoading(false)
        push('/Home')
    }


    return(
        <div id="page-helper">
            <ImageApresentation text="a melhor plataforma de compartilhamento de conhecimento">


                <img src={Logo}  width="100" alt="Logo etec help"/>
            </ImageApresentation>


            <section className="login-container">

                
                <div className="form">
                    <form  onSubmit={handleSubmit}>
                        <h1>Fazer login</h1>

                        <InputLogin 
                            first name="email" 
                            placeholder="Email" 
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} 
                        />

                        <InputLogin 
                            last name="password"
                            placeholder="Senha"
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }} 
                        />


                        <div className="login-features">

                            <div className="rememberMe"></div>
                            
                        </div>

                        <Button 
                            buttonName="Entrar" 
                            type="submit"
                            loading={ loading }
                        />
                        
                        

                    </form>
                </div>
                
            </section>

        </div>
    );
}


export default LoginHelper