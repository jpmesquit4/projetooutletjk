import './index.scss';

import BotaoFavorito from '../../components/botaoFavorito';
import { useState, useEffect } from 'react';
import Rodape from '../../components/rodape';
import CabecalhoESub from '../../components/cabecalho-e-sub';
  
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
      
    <CabecalhoESub />
      
      <div className="container">

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

      
          <Rodape />
      

    </div>
  );
}

export default Home;
