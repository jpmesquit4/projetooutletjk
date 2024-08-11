import './index.scss'
import CabecalhoESub from '../../components/cabecalho-e-sub';
import BotaoFavorito from '../../components/botaoFavorito';
import Rodape from '../../components/rodape';


export default function ResultadoDeBusca() {


  return (

    <div className='pagina-ResultadoDeBusca'>
      <CabecalhoESub />

      <div className='cabecalho-alternativo'>
        <h1>PRODUTOS</h1>

        <div>
          <i class="bi bi-arrow-down-up"></i>
          <p>Ordenar</p>
        </div>
      </div>

      <div className='menu'>
        <div className='menu-left'>
          <select>
            <option value="" key="" disabled selected>CATEGORIAS</option>
            <option value="" key="">Camisetas</option>
            <option value="" key="">Carteiras</option>
            <option value="" key="">Bermudas</option>
          </select>

          <div className='menu-preco'>
            <p>Preços</p>
            
            <div>
              <div className='deate'>
                <p>De</p>
                <input min='1' type="number" placeholder='0'/>
              </div>
              
              <div className='deate'> 
                <p>Até</p>
                <input min='1' type="number" placeholder='180'/>
              </div>

              <div>
                <p>&nbsp; </p>
                <button>Aplicar</button>
              </div>
            </div>

            
            
          </div>
        </div>

        <div className='menu-right'>
          <h3>CAMISETAS</h3>

          <div className='menu-cards'>
            <div className='card-principal'>
              <div className='card-meio'>
                <div>
                  <BotaoFavorito />
                </div>
                <img src="/assets/images/camisaColecao.png" alt="" />

              </div>

              <h1>Camisa Diesel preta</h1>
              <p>R$69,99</p>
            </div>

            <div className='card-principal'>
              <div className='card-meio'>
                <div>
                  <BotaoFavorito />
                </div>
                <img src="/assets/images/camisaColecao.png" alt="" />

              </div>

              <h1>Camisa Diesel preta</h1>
              <p>R$69,99</p>
            </div>

            <div className='card-principal'>
              <div className='card-meio'>
                <div>
                  <BotaoFavorito />
                </div>
                <img src="/assets/images/camisaColecao.png" alt="" />

              </div>

              <h1>Camisa Diesel preta</h1>
              <p>R$69,99</p>
            </div>
            
            <div className='card-principal'>
              <div className='card-meio'>
                <div>
                  <BotaoFavorito />
                </div>
                <img src="/assets/images/camisaColecao.png" alt="" />

              </div>

              <h1>Camisa Diesel preta</h1>
              <p>R$69,99</p>
            </div>
            
            <div className='card-principal'>
              <div className='card-meio'>
                <div>
                  <BotaoFavorito />
                </div>
                <img src="/assets/images/camisaColecao.png" alt="" />

              </div>

              <h1>Camisa Diesel preta</h1>
              <p>R$69,99</p>
            </div>

            <div className='card-principal'>
              <div className='card-meio'>
                <div>
                  <BotaoFavorito />
                </div>
                <img src="/assets/images/camisaColecao.png" alt="" />

              </div>

              <h1>Camisa Diesel preta</h1>
              <p>R$69,99</p>
            </div>


          </div>
        </div>
      </div>

      <Rodape />

    </div>

  );

}