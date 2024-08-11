import './index.scss'
import CabecalhoESub from '../../components/cabecalho-e-sub';
import Rodape from '../../components/rodape';


export default function SobreNos() {
  
  return (
    <div className="pagina-SobreNos">
      
      <CabecalhoESub />

      <div className='cabecalho-alternativo'>
        <h1>QUEM SOMOS</h1>
      </div>

      <div className="sobre">
        <h1>Origem da loja:</h1>

        <p>Bem-vindo à nossa loja de moda masculina, um empreendimento nascido da amizade e paixão compartilhada por moda de qualidade. Fundada por dois amigos, Jefferson e Kauan, em janeiro de 2024, nossa loja é mais do que apenas um espaço de compras - é um destino para homens que buscam estilo, qualidade e economia.
          <br /><br />
          Na nossa jornada, abraçamos uma missão simples, porém vital: oferecer peças de qualidade a preços acessíveis. Acreditamos que o estilo não deve ser um luxo inatingível, mas sim uma expressão acessível da sua personalidade. Assim, cada item em nossa coleção é cuidadosamente selecionado para garantir o equilíbrio perfeito entre moda e valor.
          <br /><br />
          Ao explorar nossa ampla variedade de roupas e acessórios, você encontrará opções que não apenas complementam seu estilo, mas também se encaixam no seu orçamento. Nossa equipe está comprometida em fornecer um atendimento excepcional, garantindo que sua experiência de compra seja tão gratificante quanto suas escolhas de moda.
          <br /><br />
          Então, mergulhe em nossa coleção e descubra a combinação perfeita de estilo, qualidade e economia. Estamos aqui para ajudá-lo a expressar seu estilo único, sem comprometer seu bolso. Bem-vindo à nossa loja, onde a moda encontra o valor.
        </p>
      </div>

      <Rodape />

    </div>
  );

}