import React from 'react'

import './home.css'

import {ErrorMessage, Formik, Form, Field} from 'formik'
import * as yup from 'yup'
import axios from 'axios'

import img1 from 'C:/Users/giova/Desktop/xbrain/src/img/produto-01.jpeg'
import img2 from 'C:/Users/giova/Desktop/xbrain/src/img/produto-02.jpeg'
import img3 from 'C:/Users/giova/Desktop/xbrain/src/img/produto-03.jpeg'
import img4 from 'C:/Users/giova/Desktop/xbrain/src/img/produto-04.jpeg'
import img5 from 'C:/Users/giova/Desktop/xbrain/src/img/produto-05.jpeg'
import img6 from 'C:/Users/giova/Desktop/xbrain/src/img/produto-06.jpeg'
import img7 from 'C:/Users/giova/Desktop/xbrain/src/img/produto-07.jpeg'
import img8 from 'C:/Users/giova/Desktop/xbrain/src/img/produto-08.jpeg'

const Home = () => {
    const handleSubmit = values => {
        axios.post('http://localhost:8080/v1/api/auth', values)
            .then(resp => console.log(resp))
    }

    const validations = yup.object().shape({
        name: yup.string().required('Campo obrigatório')
    })

    return (
        <>
            <div class="div">
                <h2 class="cabecalho">Produtos</h2>
            </div>
            <br></br>
            <div class="container">
                <div class="bloco">
                    <div class="gallery">
                        <img src={img1}/>
                        <div class="desc">
                            <p class="info">AirPods Apple Fones de ouvido</p>
                            <p class="valor"><b>R$ 1.499,00</b></p>
                            <p class="dividir">Em até 12x de R$ 124,92</p>
                            <p class="avista">R$ 1.349 à vista (10% de desconto)</p>
                        </div>
                    </div>
                </div>

                <div class="bloco">
                    <div class="gallery">
                        <img src={img2}/>
                        <div class="desc">
                            <p class="info">Capa de silicone para iPhone 8/7 cor Areia - rosa</p>
                            <p class="valor"><b>R$ 299,00</b></p>
                            <p class="dividir">Em até 12x de R$ 24,92</p>
                            <p class="avista">R$ 269,10 à vista (10% de desconto)</p>
                        </div>
                    </div>
                </div>
                
                <div class="bloco">
                    <div class="gallery">
                        <img src={img3}/>
                        <div class="desc">
                            <p class="info">Apple Pencil</p>
                            <p class="valor"><b>R$ 729,00</b></p>
                            <p class="dividir">Em até 12x de R$ 60,75</p>
                            <p class="avista">R$ 656,10 à vista (10% de desconto)</p>
                        </div>
                    </div>
                </div>
                
                <div class="bloco">
                    <div class="gallery">
                        <img src={img4}/>
                        <div class="desc">
                            <p class="info">Magic Mouse 2 - Prateado</p>
                            <p class="valor"><b>R$ 549,00</b></p>
                            <p class="dividir">Em até 12x de R$ 45,75</p>
                            <p class="avista">R$ 494,10 à vista (10% de desconto)</p>
                        </div>
                    </div>
                </div>
                
                <div class="bloco">
                    <div class="gallery">
                        <img src={img5}/>
                        <div class="desc">
                            <p class="info">Caixa prateada de alumínio com pulseira esportiva branca</p>
                            <p class="valor"><b>R$ 2.899,00</b></p>
                            <p class="dividir">Em até 12x de R$ 241,58</p>
                            <p class="avista">R$ 2609,10 à vista (10% de desconto)</p>
                        </div>
                    </div>
                </div>
                
                <div class="bloco">
                    <div class="gallery">
                        <img src={img6}/>
                        <div class="desc">
                            <p class="info">Cabo de lightning para USB (1m)</p>
                            <p class="valor"><b>R$ 149,00</b></p>
                            <p class="dividir">Em até 12x de R$ 12,42</p>
                            <p class="avista">R$ 134,10 à vista (10% de desconto)</p>
                        </div>
                    </div>
                </div>
                
                <div class="bloco">
                    <div class="gallery">
                        <img src={img7}/>
                        <div class="desc">
                            <p class="info">Smart Keyboard para iPad Pro 12,9 polegadas - inglês (EUA)</p>
                            <p class="valor"><b>R$ 1.099,00</b></p>
                            <p class="dividir">Em até 12x de R$ 91,58</p>
                            <p class="avista">R$ 989,10 à vista (10% de desconto)</p>
                        </div>
                    </div>
                </div>
                
                <div class="bloco">
                    <div class="gallery">
                        <img src={img8}/>
                        <div class="desc">
                            <p class="info">Carregador USB de 5W Apple</p>
                            <p class="valor"><b>R$ 149,00</b></p>
                            <p class="dividir">Em até 12x de R$ 12,42</p>
                            <p class="avista">R$ 134,10 à vista (10% de desconto)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 class="h2">Dados dos Clientes</h2> 
                <div>
                    <Formik
                        initialValues={{}} 
                        onSubmit={handleSubmit} 
                        validationSchema={validations}
                    >
                        <Form className="Informacao">
                            <div className="Informacao-Group">
                                <Field 
                                    name='name' 
                                    className="Informacao-Field"
                                    placeholder="Nome do cliente aqui"
                                />
                                <ErrorMessage
                                    component="span" 
                                    name="name" 
                                    className="Informacao-Error"
                                />
                                <Field 
                                    name='email' 
                                    className="Informacao-Field"
                                    placeholder="Digite seu e-mail aqui"
                                />
                                
                                <select name="select" className="Sexo-Field">
                                    <option selected disabled>Selecione</option>
                                    <option value="sexo1">Feminino</option> 
                                    <option value="sexo2">Masculino</option>
                                </select>
                            </div>
                        </Form>
                    </Formik>
                    
                    
                </div>            
            </div>
            <br/>
            <div class="finalizar">
                <h3>Total:</h3>
            </div>
            <div class="confirmar">
                <form method="get" method="get" action="compra">
                    <button class="button">FINALIZAR COMPRA</button>                
                </form>
            </div>
    </>
    )
}

export default Home