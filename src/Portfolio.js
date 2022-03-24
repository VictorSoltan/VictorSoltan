import React from 'react'
// import { TransitionGroup, CSSTransition} from 'react-transition-group'
import archart from './portfolio/archart.png';
import tehnopunki from './portfolio/tehnopunki.png';
import leaf from './portfolio/leaf.png';
import './styles/portfolio.scss'

class Portfolio extends React.Component{
  state = {
    imageNumber: 0,
    images: [
      archart,
      tehnopunki,
      leaf
    ],
    description: [
      'archart',
      'tehnopunki',
      'leaf'
    ],
    text: [
      'Работа сделана для портфолио',
      'Блог про игры и технологии',
      'Сайт по продаже растений'
    ],
    works: [
      { numb: 0 },
      { numb: 1 },
      { numb: 2 },
    ]
  }
  moveLeft(){
    let slider = document.querySelector('.work-list');
    slider.style.left += 20+'%';

  }
  slider = (e) => {
    this.setState({
      imageNumber: e.target.value
    })
  }
  render(){
    const workButtons = this.state.works.map(work => {
      return (
        <button onClick={this.slider} value={work.numb}>{this.state.description[work.numb]}
        </button>
      )
    })
    return (
      <div className="portfolio">
       <p>Мои работы:</p>
       {/* <TransitionGroup>
        <CSSTransition
         transitionEnterTimeout={500}
         transitionLeaveTimeout={300}> */}
          <div className="work-list">
           <img src={this.state.images[this.state.imageNumber]} alt={this.state.description[this.state.imageNumber]} />
           <p>{this.state.text[this.state.imageNumber]}</p>
          </div>
         {/* </CSSTransition>
        </TransitionGroup> */}
        <div className="buttons">
        { workButtons }
        </div>
      </div>
    )
  }
}

export default Portfolio;
