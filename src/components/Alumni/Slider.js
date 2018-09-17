import React, { Component } from 'react'
import Slider from 'react-slick'
import {Slide} from './Slide'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export class AlumniSlider extends Component {
  render() {
    const slides = [
      {pic:'https://int2.blob.core.windows.net/public/alumnisection/alumni-carlos.jpg'},
      {pic:'https://int2.blob.core.windows.net/public/alumnisection/alumni-juan.jpg'},
      {pic:'https://int2.blob.core.windows.net/public/alumnisection/alumni-rene.jpg'},
      {pic:'https://int2.blob.core.windows.net/public/alumnisection/alumni-scarlett.jpg'},
      {pic:'https://int2.blob.core.windows.net/public/alumnisection/alumni-stanley.jpg'}
    ]
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <Slider {...settings}>
        {slides.map((slide,index) =><Slide key={index} pic={slide.pic}/>)}
      </Slider>
    )
  }
}

