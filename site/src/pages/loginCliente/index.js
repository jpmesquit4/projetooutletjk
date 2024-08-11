import './index.scss'

export default function LoginCliente() {
  
  return (
    <div className="pagina-LoginCliente" >
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
              <h1>Log in</h1>
              <p>Faça login para continuar acessando as páginas</p>
              <img src="/assets/images/JkOutletLogo.png" alt="" />
              
              <input type="text" placeholder='Email:' />
              <input type="text" placeholder='Senha:' />

              <button>CONTINUE</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

}