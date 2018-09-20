import React, { Component } from 'react'
import Slider from 'react-slick'
import {Slide} from './Slide'
import data from './data'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export class AlumniSlider extends Component {
  render() {
    
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
    }
    return (
      <Slider {...settings}>
        {data.map((alumni,index) =><Slide key={index} data={alumni}/>)}
      </Slider>
    )
  }
}

