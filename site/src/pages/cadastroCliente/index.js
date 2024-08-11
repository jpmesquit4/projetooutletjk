import './index.scss'
import {useState} from 'react'



export default function CadastroCliente() {

  return (
    <div className="pagina-CadastroCliente" >
      <div className="fundo" style={{
        backgroundImage: `url("/assets/images/loginFundo.png")`,
        backgroundSize: 'cover'
      }}>
      
        
        <div className='fundopreto'>

        <div className='menu-login'>
          <div className="quadrado"
          style={{
            backgroundImage: `url("/assets/images/quadrado.png")`,
            backgroundSize: 'cover'
          }}>

            </div>

            <div className="login">
              <h1>Crie sua conta</h1>
              <p>Faça o cadastro para fazer o login</p>
              <img src="/assets/images/JkOutletLogo.png" alt="" />
              
              <input type="text" placeholder='Nome de usuário:' />
              <input type="text" placeholder='Email:' />
              <input type="text" placeholder='Senha:' />

              <div className="part-selects">

                    <div className="ano">
                        <input type="date" min="1950-01-01" max="2024-01-01" />
                    </div>

                  <div className="genero">
                    <select>
                        <option value="" disabled selected>Genero</option>
                        <option value="Masculino" key="">Masculino</option>
                        <option value="Feminino" key="">Feminino</option>
                        <option value="Outro" key="">Outro</option>
                    </select>
                  </div>
              </div>

              <button>CADASTRE-SE</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

}