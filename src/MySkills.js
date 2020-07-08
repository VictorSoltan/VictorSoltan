import React from 'react';
import './my-skills.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faVuejs, faHtml5, faCss3Alt, faJs, faGit, faDocker, faLinux, faNpm, faSass } from '@fortawesome/free-brands-svg-icons'

class MySkills extends React.Component {
  state = {
    techs: [
      { text: 'HTML5(так-же html canvas)', icon: faHtml5 },
      { text: 'CSS3', icon: faCss3Alt },
      { text: 'JavaScript', icon: faJs },
      { text: 'Linux(обычно в разработке использую эту О.С.)', icon: faLinux },
      { text: 'VueJs(в связке с фреймворком NuxtJs)', icon: faVuejs },
      { text: 'Sass(так-же less и scss)', icon: faSass },
      { text: '', icon: faNpm},
      { text: '', icon: faGit },
      { text: 'Docker', icon: faDocker },
      { text: 'ReactJs', icon: faReact }
    ],
  }
  render(){
    const techList = this.state.techs.map(tech => {
      return (
        <div>
         <FontAwesomeIcon icon={tech.icon} />
         <p>{tech.text}</p>
        </div>
      )
    });
    return (
      <div className="tech">
       <div>
        <p>Технологии которые использую:</p>
        <p>(Идут в порядке моего ознакомления с ними)</p>
       </div>
       <div className="tech-list">
        { techList }
       </div>
      </div>
    )
  }
}

export default MySkills;
