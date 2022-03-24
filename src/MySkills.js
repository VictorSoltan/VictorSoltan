import React from 'react';
import './styles/my-skills.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faReact, faVuejs, faHtml5, faCss3Alt, faJs, faGit, faDocker, faLinux, faNpm, faSass } from '@fortawesome/free-brands-svg-icons'

class MySkills extends React.Component {
  state = {
    techs: [
      { text: 'HTML5' },
      { text: 'CSS3' },
      { text: 'JavaScript' },
      { text: 'VueJs (NuxtJs)' },
      { text: 'Sass (less & scss)' },
      { text: 'Docker' },
      { text: 'ReactJs' },
      { text: 'NodeJs' },
      { text: 'Python' }
    ],
  }
  render(){
    const techList = this.state.techs.map(tech => {
      return (
        <div>
         {/* <FontAwesomeIcon icon={tech.icon} /> */}
         <p>{tech.text}</p>
        </div>
      )
    });
    return (
      <div className="tech">
       <div>
        <h2>Technologies I use:</h2>
       </div>
       <div className="tech-list">
        { techList }
       </div>
      </div>
    )
  }
}

export default MySkills;
