import React, { Component } from 'react'
import Slider from 'react-slick'
import {Slide} from './Slide'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export class AlumniSlider extends Component {
  render() {
    const slides = [
      {
        name:'Carlos Alvarado',
        pic:'https://int2.blob.core.windows.net/public/alumnisection/alumni-carlos.jpg',
        text: 'Lorem Ipsum dolor sit amet.',
        year: '2016'
      },
      {
        name:'Juan',
        pic:'https://int2.blob.core.windows.net/public/alumnisection/alumni-juan.jpg',
        text: 'Lorem Ipsum dolor sit amet.',
        year: '2016'
      },
      {
        name:'René García',
        pic:'https://int2.blob.core.windows.net/public/alumnisection/alumni-rene.jpg',
        text: 'Lorem Ipsum dolor sit amet.',
        year: '2016'
      },
      {
        name:'Scarlett',
        pic:'https://int2.blob.core.windows.net/public/alumnisection/alumni-scarlett.jpg',
        text: 'Lorem Ipsum dolor sit amet.',
        year: '2016'
      },
      {
        name:'Stanley',
        pic:'https://int2.blob.core.windows.net/public/alumnisection/alumni-stanley.jpg',
        text: 'Lorem Ipsum dolor sit amet.',
        year: '2016'
      },
    ]
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    }
    return (
      <Slider {...settings}>
        {slides.map((slide,index) =><Slide key={index} data={slide}/>)}
      </Slider>
    )
  }
}

