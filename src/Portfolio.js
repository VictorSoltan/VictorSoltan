import React from 'react'
// import { TransitionGroup, CSSTransition} from 'react-transition-group'
import archart from './portfolio/archart.png';
import tehnopunki from './portfolio/tehnopunki.png';
import leaf from './portfolio/leaf.png';
// import battleverse from './portfolio/battleverse.png';

import './styles/portfolio.scss'
import Slider from "react-slick";

export default function Portfolio(){

  let settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let works = [
    // {image: battleverse, description: 'battleverse', text: 'Page about BattleVerse'},
    {image: archart, description: 'archart', text: 'Website maded for portfolio'},
    {image: tehnopunki, description: 'tehnopunki', text: 'Blog about games and technologies'},
    {image: leaf, description: 'leaf', text: 'Site for the sale of plants'}
  ]

  return (
    <div className="portfolio">
     <p>My works:</p>
      <div className="work-list">
      <Slider {...settings}>
        {works.map((item, index) => (
            <div className='work'>
              <h4>{item.description}</h4>
              <img src={item.image} alt={item.description} />
              <p>{item.text}</p>
            </div>
        ))}
      </Slider>          
      </div> 
    </div>
  )
}