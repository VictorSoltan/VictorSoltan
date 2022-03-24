import React from 'react';
import './styles/my-skills.scss'
import HTML from './assets/html.png'
import Css from './assets/css.png'
import Js from './assets/js.png'
import Vue from './assets/vue.png'
import Sass from './assets/sass.png'
import Docker from './assets/docker.png'
import Atom from './assets/atom.png'
import Py from './assets/python.png'

class MySkills extends React.Component {
  state = {
    techs: [
      { text: 'HTML5', icon:  HTML},
      { text: 'CSS3', icon: Css },
      { text: 'JavaScript', icon: Js },
      { text: 'VueJs (NuxtJs)', icon:  Vue},
      { text: 'Sass (less & scss)', icon: Sass },
      { text: 'Docker', icon:  Docker},
      { text: 'ReactJs', icon:  Atom},
      { text: 'NodeJs', icon: Js },
      { text: 'Python', icon: Py }
    ],
  }
  render(){
    const techList = this.state.techs.map(tech => {
      return (
        <div>
         <img src={tech.icon} alt={tech.text} />
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
