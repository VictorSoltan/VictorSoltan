import React from 'react'
import AboutMe from './AboutMe'
import MySkills from './MySkills'
import Portfolio from './Portfolio'
import v from './portfolio/v.png';
import './name.scss'


class Name extends React.Component {
  state = {
    showMenu: true,
    showName: true,
    showSkills: false,
    showAboutMe: false,
    showPortfolio: false,
    showContact: false
  }
  displayName = () => {
    this.setState({
      showName: true,
      showAboutMe: false,
      showSkills: false,
      showPortfolio: false,
      showContact: false
    })
  }
  displayMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
  AboutMe = () => {
    this.setState({
      showName: false,
      showAboutMe: true,
      showSkills: false,
      showPortfolio: false,
      showContact: false
    })
  }
  MySkills = () => {
    this.setState({
      showSkills: true,
      showName: false,
      showAboutMe: false,
      showPortfolio: false,
      showContact: false,
    })
  }
  Portfolio = () => {
    this.setState({
      showSkills: false,
      showName: false,
      showAboutMe: false,
      showPortfolio: true,
      showContact: false
    })
  }
  MyContact = () => {
    this.setState({
      showSkills: false,
      showName: false,
      showAboutMe: false,
      showPortfolio: false,
      showContact: true,
    })
  }
  render() {
    return (
        <div className="content">
         <div className="header">
          <div className="logo" onClick={ this.displayName }>
            <img className={ this.state.showMenu ? 'hideLogo' : ''} src={v} alt="v.logo" />
          </div>
          <div className="menu">
           <div className={ this.state.showMenu ? 'points showPoints' : 'points'}>
            <p onClick={this.AboutMe} style={{ color: this.state.showAboutMe ? 'rgba(120, 202, 185, 1)' : '' }}>Обо мне</p>
            <p onClick={this.MySkills} style={{ color: this.state.showSkills ? 'rgba(110, 202, 185, 1)' : '' }}>Мои навыки</p>
            <p onClick={this.Portfolio} style={{ color: this.state.showPortfolio ? 'rgba(110, 202, 185, 1)' : '' }}>Портфолио c работами</p>
            <p onClick={this.Portfolio} style={{ color: this.state.showPortfolio ? 'rgba(110, 202, 185, 1)' : '' }}>Портфолио</p>
            <p onClick={this.MyContact} style={{ color: this.state.showContact ? 'rgba(110, 202, 185, 1)' : '' }}>Связаться со мной</p>
           </div>
           <div className="menu-bar" onClick={this.displayMenu}>
            <hr className={ this.state.showMenu ? 'active' : '' }/>
            <hr className={ this.state.showMenu ? 'active' : '' } />
            <hr className={ this.state.showMenu ? 'active' : '' }/>
           </div>
          </div>
         </div>
         <div className="name" style={{ display: this.state.showName ? 'flex' : "none" }}>
          <h1>Victor Soltan</h1>
          <h1>Web Developer</h1>
         </div>
         <div style={{ display: this.state.showAboutMe ? 'flex' : "none" }}>
          <AboutMe />
         </div>
         <div style={{ display: this.state.showSkills ? 'flex' : "none" }}>
          <MySkills />
         </div>
         <div style={{ display: this.state.showPortfolio ? 'flex' : 'none' }}>
          <Portfolio />
         </div>
        </div>
    );
  }
}

export default Name;
