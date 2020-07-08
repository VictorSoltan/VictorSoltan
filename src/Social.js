import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faVk, faTelegramPlane, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faLaptopHouse } from '@fortawesome/free-solid-svg-icons'
import './footer.scss'


class Social extends React.Component {
  state = {
    showInfo: true
  }
  displayMenu = () => {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }
  render() {
    return (
        <div className="footer-content">
        <a href="https://github.com/SsapNapier"><FontAwesomeIcon icon={faGithubSquare} /></a>
        <a href="https://vk.com/soltanvictor"><FontAwesomeIcon icon={faVk} /></a>
        <a href="https://t.me/ViktorSoltan"><FontAwesomeIcon icon={faTelegramPlane} /></a>
        <a href="https://www.facebook.com/viktor.soltan"><FontAwesomeIcon icon={faFacebookSquare} /></a>
        <a href="http://www.tehnopunki.ru"><FontAwesomeIcon icon={faLaptopHouse} /></a>

        </div>
    );
  }
}

export default Social;
