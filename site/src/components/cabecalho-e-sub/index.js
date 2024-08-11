import "./index.scss";
import { Link } from 'react-router-dom'

function CabecalhoESub() {
  
  return (
    <div>
      <header>
        <div>
          <img src="/assets/images/JkOutletLogo.png" alt="" />
        </div>

        <input type="text" placeholder='O que você está buscando?'/>

        <div className="icons-cabecalho">
          <img src="/assets/images/iconPerfil.png" alt="" />
          <img src="/assets/images/iconCarrinho.png" alt="" />
        </div>
        
      </header>
      <div className='sub-cabecalho'>
        
          <a href="/">Início</a>
          <a href="">Produtos</a>
          <a href="">Contato</a>
          <a href="/sobrennos">Quem somos</a>
       
      </div>
    </div>
  )

}


export default CabecalhoESub;