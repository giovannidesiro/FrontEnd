import React from 'react'
 
import './compra.css'
import imgcompra from 'C:/Users/giova/Desktop/xbrain/src/img/purchase.png'

const Compra = () => {    
    return(
    <>
        <div>
            <div class="containers">
                <div class="box">
                    <h3>NOME DA PESSOA,</h3>
                    <p>Sua compra no valor VALOR</p>
                    <p>foi finalizada com sucesso</p>
                    <img src={imgcompra}/>
                    <p></p>
                    <form method="get" action="/">
                        <button class="buttons">INICIAR NOVA COMPRA</button>
                    </form>
                </div>
            </div>
        </div>   
    </>
    )
}

export default Compra