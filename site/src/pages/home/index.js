import './index.scss';

import BotaoFavorito from '../../components/botaoFavorito';
import { useState, useEffect } from 'react';


function Home() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [favorito, setFavorito] = useState(false);

  function botaoFavorito() {
    setFavorito(!favorito);
  }

  useEffect(() => {
    showDivs(slideIndex);
  }, [slideIndex]);

  const plusDivs = (n) => {
    setSlideIndex(prevIndex => prevIndex + n);
  };

  const showDivs = (n) => {
    const slides = document.getElementsByClassName("mySlides");
    let newIndex = n;

    if (n > slides.length) {
      newIndex = 1;
    } else if (n < 1) {
      newIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[newIndex - 1].style.display = "block";
    setSlideIndex(newIndex);
  };


  return (
    <div className="pagina-home">
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
          <a href="">Início</a>
          <a href="">Produtos</a>
          <a href="">Contato</a>
          <a href="">Quem somos</a>
      </div>

      <div className="container" >

        <div className="sliding-background">
          <div style={{ 
            backgroundImage: `url("/assets/images/bannerFreteGratis.png")`,
            backgroundRepeat: 'repeat-x'
          }}>
          </div>

          <div style={{ 
            backgroundImage: `url("/assets/images/bannerSeguro.png")`,
            backgroundRepeat: 'repeat-x'
          }}>
          </div>


        </div>

      </div>

      <div className="colecoes">

        <div><img style={{ position: 'relative', bottom: '20px'}} src="/assets/images/moletomColecao.png" alt="" /></div>
        <div><img src="/assets/images/camisaColecao.png" alt="" /></div>
        <div><img src="/assets/images/bermudaColecao.png" alt="" /></div>
        <div><img src="/assets/images/intimosColecao.png" alt="" /></div>
      </div>

      <h1 className="title">Camisas em promocão</h1>
      
      <div className='cards'>

        <div className="card-principal">
          <div className='card-meio'>
            <div>
              <BotaoFavorito />
            </div>
            <img src="/assets/images/camisaColecao.png" alt="" />

            <span><p>promoção</p></span>
          </div>

          <h1>Camisa Diesel preta</h1>
          <p>R$69,99</p>

        </div>

        <div className="card-principal">
          <div className='card-meio'>
            <div>
              <BotaoFavorito />
            </div>
            <img src="/assets/images/camisaColecao.png" alt="" />

            <span><p>promoção</p></span>
          </div>

          <h1>Camisa Diesel preta</h1>
          <p>R$69,99</p>

        </div>

        <div className="card-principal">
          <div className='card-meio'>
            <div>
              <BotaoFavorito />
            </div>
            <img src="/assets/images/camisaColecao.png" alt="" />

            <span><p>promoção</p></span>
          </div>

          <h1>Camisa Diesel preta</h1>
          <p>R$69,99</p>

        </div>

      </div>

      <h1 className="title">Mais vendidos</h1>

      <div className='cards'>

        <div className="card-principal">
          <div className='card-meio'>
            <div>
              <BotaoFavorito />
            </div>
            <img src="/assets/images/camisaColecao.png" alt="" />

            <span><p>mais vendidos</p></span>
          </div>

          <h1>Camisa Diesel preta</h1>
          <p>R$69,99</p>

        </div>

        <div className="card-principal">
          <div className='card-meio'>
            <div>
              <BotaoFavorito />
            </div>
            <img src="/assets/images/camisaColecao.png" alt="" />

            <span><p>mais vendidos</p></span>
          </div>

          <h1>Camisa Diesel preta</h1>
          <p>R$69,99</p>

        </div>

        <div className="card-principal">
          <div className='card-meio'>
            <div>
              <BotaoFavorito />
            </div>
            <img src="/assets/images/camisaColecao.png" alt="" />

            <span><p>mais vendidos</p></span>
          </div>

          <h1>Camisa Diesel preta</h1>
          <p>R$69,99</p>

        </div>

      </div>
    
      <div className="bannerNovidades">
        <img className="icon-flecha" onClick={() => plusDivs(-1)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAaFJREFUaEPtmU1OwzAQRl8vARIsQIhrcAPEYUDsYY8AcQa4CH+noBILDgJGNQolIY3jmUzsyapSa3ve9yx7qiyo7FlUxosDl27cDbvhwhLwLV2Y0D84btgNF5aAb2lhoQfACXArvE7n9JqG94AXYBc4B66mgNYCbsJGzsuvDxfa0BrA+8Dzyuw63xlwrQktDdxmNvJ9AEfAeynA5mBDsFKGTcJKAZuFlQA2DZsb2DxsTuBZwOYCng1sDuDQGz92NBWT3LN9d/qYaynAvgLbLYuYhB1j+HD1R2CrI9EH4K0v7RHfJ/fgKYb/MzuCYdDQlLq/Fxg60AJsSt0/aTrwBhvLguWhopINx4F9h9Y9sNwgvNSfqB5asciqrqUmdDWNR4SuqrWcHXTyaddy2szCdE7gkIF56NzA5qElgE1DSwGbhZYENgktDRygQ0f2BOy0nOynwE1qf5kyTgO4y3Toh8MLNdVHC3gduvjXpc3e+xi4U9XaWEzT8FSMv9Z1YBMaBItww4LhmpjaDZvQIFiEGxYM18TUbtiEBsEi3LBguCam/gRJcFQ9HYcvlwAAAABJRU5ErkJggg==" />
        <img className='mySlides' src="/assets/images/bannerJordan.png" alt="" />
        <img className='mySlides' src="/assets/images/bannerOakley.png" alt="" />
        <img className="icon-flecha" onClick={() => plusDivs(1)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAYVJREFUaEPt2c1NxDAQhuF3u+DAgQNd8NMIVSDgDGegGWrgQBUgOEAboJF2pUXsSjgTz2fHk/M69uNvNo7jFYNdq8G8JHjpiWfCmfDCZiBLemGB/uFkwpnwwmYgSzo40EvgCXiL6leZ8B1wC3wCJ8BHBFoFfgCut4BhaAX4BrjfkaahT4H3mkkrwEfAM3C4B121vBVgc8rQKrAMrQRL0GpwOLoFcCi6FXAYuiXwBv0CHNRasloDm/N4vU5XQbcIror2gm0DUOuypC/23PwLOAdeSzv3gr9LO5zx95M2HD2Dbe6K0UsAW2n/+wNCz+DidK0kvODhHlozPoN+3araWuxNuAa4GnaOkp4bbB8Ghnm1DPkK0kpJh2BbKekwbAvgUKwaHI5VgiVYFViGVYGvgMcdC7jtcc9KNgJTXgJUy9JQh2mbYOyo1DYfk3Y9U9JVlfT2WIc6EJ8akqud6j/sGrSncYI9s9dD20y4h5Q8Y8yEPbPXQ9tMuIeUPGPMhD2z10Pb4RL+ActzZD36y1QhAAAAAElFTkSuQmCC"/>
      </div>

      <footer>
                <div>
                    <h1>jkoutlet<span style={{color: "#FF4848"}}>.</span> </h1>
                    <p>Loja virtual - Pronta entrega</p>
                </div>

                <div>
                    <h3>Links úteis</h3>
                    <a href="">Início</a>
                    <a href="">Produtos</a>
                    <a href="">Contato</a>
                    <a href="">Quem somos</a>
                </div>

                <div>
                    <h3>Rede Sociais</h3>
                    <a href="">Instagram</a>
                    <a href="">Whatsapp</a>
                    
                </div>

                <div className="newsletter">
                    <h3>NewsLetter</h3>
                    <p>Digite seu e-mail e seja avisado sobre novidades.</p>

                     <form action="https://formsubmit.co/joaopedromesq123@gmail.com" method="POST">
                        <input type="email" name="email" required placeholder="Seu endereço de email:"/>
                        <input type="hidden" name="_captcha" value="false"/>
                        <input type="hidden" name="_template" value="table"/>
                        <input type="hidden" name="_next" value="http://localhost:3000"/>
                        <button type="submit">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbNJREFUSEvV1U2ID3EYB/DP5vVAcsEqtQ5qD8iRC8WeXFzUZkuJUpu3WkKUlxw2JwcOysEBeyUXJS4OIgcHF07blhM5bJtkKeb59/trmmb+M/NnD57bNM98v8/L9/nOgAWOgQXG918R7MJpbMSW7mT+RQf7cB7bE+h3LP9bgkU4gHPYXNjjJ6ztlyAqO4IzGKoQyAcMtyVYhWM4hTU1ynuFHU0JotUJjGNlQ0k/wd46glBCLO4QllYAf8NL7Cm8v4+DVQQhr4vYj1hkWczjNu7hKVYXkm7hRBnBVFJG1SR+4S6uZnqfw2tsKkm+hktlBNM9lPEQF/AeS/AMOysqiZ3dKCNYlmZ3MneJAXQWb3NgDzDWY+GHU6edlKpL3p3ePS8AXc6er9SoKS77cZ2KyjCi6qi+LsKTXvRDEKOLPfyxgQqmrXjXhmAkLTW+WYxRHM+ZW5FnAz62IQh5vsEkHiGeI7YlAcTNhLK6sQJf2xJ088PIwpPyy1+fOjqKn9kRrsu31OR/0K34c1LQnezaf5TMPyxlEDNtCb7gOm5m/h/+0yqadBBWPdsKNZfchKBf7M53vwF4sUIZUrZYwwAAAABJRU5ErkJggg=="/>
                        </button>
                    </form> 
                </div>
      </footer>

      

    </div>
  );
}

export default Home;
