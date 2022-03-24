import React from 'react'
import './styles/about-me.scss'

import Qr from './portfolio/qr-code.png';

class AboutMe extends React.Component {
  render(){
    return (
      <div className="about-me">
        <p>
          Hello! My name is Victor Soltan, I am a web developer with over 4 years of experience.
        </p>
        <p>
          <b>Contacts:</b>
          <br/>
          <span>
            my Email: <a href="mailto:victor.soltan.evg@gmail.com">victor.soltan.evg@gmail.com</a>
          </span>
          <br />
          <span>
            my Telegram: <a href="https://t.me/VictorSoltan">@VictorSoltan</a>
          </span>
        </p>
        <p>
          <img src={Qr} alt="qr" />
        </p>
      </div>
    )
  }
}

export default AboutMe;
