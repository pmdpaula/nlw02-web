import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studytIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';

const Landing = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de estudo"
          className="hero-image"
        />
      </div>
      <div className="buttons-container">
        <a href="" className="study">
          <img src={studytIcon} alt="Estudar"/>
          Estudar
        </a>

        <a href="" className="give-classes">
          <img src={giveClassesIcon} alt="Estudar"/>
        </a>
      </div>
    </div>
  )
}

export default Landing;