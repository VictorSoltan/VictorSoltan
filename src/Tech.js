// import React from 'react'
// import './name.scss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faReact, faVuejs, faHtml5, faCss3Alt, faJs, faGit, faDocker, faLinux, faNpm, faSass } from '@fortawesome/free-brands-svg-icons'
//
// class Name extends React.Component {
//   state = {
//     showInfo: true
//   }
//   displayMenu = () => {
//     this.setState({
//       showInfo: !this.state.showInfo
//     })
//   }
//   render() {
//     return (
//         <div className="content">
//          <div className="menu">
//           <div className="points" style={{ display: this.state.showInfo ? 'none' : "flex" }}>
//            <p onClick={this.AboutMe}>Обо мне</p>
//            <p onClick={this.MySkills}>Мои навыки</p>
//            <p onClick={this.Portfolio}>Мои работы</p>
//            <p onClick={this.Contact}>Связаться со мной</p>
//           </div>
//           <div className="menu-bar" onClick={this.displayMenu}>
//            <hr className={ this.state.showInfo ? '' : 'active' }/>
//            <hr className={ this.state.showInfo ? '' : 'active' } />
//            <hr className={ this.state.showInfo ? '' : "active" }/>
//           </div>
//          </div>
//          <div className="name" style={{ display: this.state.showInfo ? 'none' : "none" }}>
//           <h1>Victor Soltan</h1>
//           <h1>Web Developer</h1>
//          </div>
//          <div className="name" style={{ display: 'none' }}>
//             <p>Здравствуйте, меня зовут Виктор Солтан, я веб-разработчик с двухлетним стажем. На данный момент работаю на фрилансе.</p>
//          </div>
//          <div className="tech" style={{ display: 'flex' }}>
//           <div>
//            <p>Технологии которые я использую:</p>
//           </div>
//           <div>
//            <FontAwesomeIcon icon={faHtml5} />
//            <FontAwesomeIcon icon={faCss3Alt} />
//            <FontAwesomeIcon icon={faJs} />
//            <FontAwesomeIcon icon={faLinux} />
//            <FontAwesomeIcon icon={faVuejs} />
//            <FontAwesomeIcon icon={faSass} />
//            <FontAwesomeIcon icon={faNpm} />
//            <FontAwesomeIcon icon={faGit} />
//            <FontAwesomeIcon icon={faDocker} />
//            <FontAwesomeIcon icon={faReact} />
//           </div>
//          </div>
//         </div>
//     );
//   }
// }
//
// export default Name;
