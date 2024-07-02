import React, { useState } from 'react';

const BotaoFavorito = () => {
  const [favorito, setFavorito] = useState(false);

   const botaoFavorito = () => {
    setFavorito(!favorito);
  };


  return (
    <div>
      <i onClick={botaoFavorito} className={favorito ? 'bx bxs-heart' : 'bx bx-heart'}></i>
    </div>
  );
};

export default BotaoFavorito;