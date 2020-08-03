import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './TeacherItem.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/19227876?s=460&u=be4649d2fd412db8b1c718450032134f5a4c2239&v=4" alt="Pedro de Paula"/>
        <div>
          <strong>Pedro Machado de Paula</strong>
          <span>Química</span>
        </div>

      </header>

      <p>
    Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.
        <br /><br />
    Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.
      </p>

      <footer>
        <p>
      Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
      Entrar em contato
        </button>
      </footer>
    </article>

  );
};


export default TeacherItem;
