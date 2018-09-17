import React, { Component } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import InnerStyledSection from './InnerStyledSection'
import OuterStyledSection from './OuterStyledSection'

export class HomePageHeader extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <HomePageHeaderStyles className='home-page-header__outer'>
        <InnerStyledSection className='home-page-header__inner'>
          {/* <div className='home-page-header__cover'></div> */}

          <div className='home-page-header__image'>
            <SectionSliderContainer>
              <div className='carousel'>
                {/* <Slider {...settings}>
                  <div className='carousel__item'>
                    <div className='carousel__container'>
                      <div className='carousel__item__logo' />
                      <div className='carousel__item__text'>
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                      </div>
                      <div className='carousel__item__button'>
                        <button>¿Cómo aplicar?</button>
                      </div>
                    </div>
                  </div>
                  <div className='carousel__item'>
                    <h3>2</h3>
                  </div>
                </Slider> */}
              </div>
            </SectionSliderContainer>
          </div>
        </InnerStyledSection>
      </HomePageHeaderStyles>
    )
  }
}

const SectionSliderContainer = styled.div`
  width: 90%;
  @media(min-width: ${({ theme }) => theme.medium.start}) {
    height: 500px;
  }
  @media(min-width: ${({ theme }) => theme.large.start}) {
    heigth: 700px;
  }
  margin: 0 auto;
  padding-top: 100px;
  .carousel {

    &__item {
      ${'' /* position: absolute; */}
      ${'' /* background-color: red; */}
      width: 60% !important;
      margin: 0 0 0 20%;

      &__logo {
        float: right;
        ${'' /* border: 1px solid red; */}
        width: 100%;
        height: 125px;
        background-image: url('/assets/img/Logo-Int2.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }

      &__text {
        ${'' /* border: 1px solid black; */}
        float: right;
        clear: both;
        text-align: justify;
      }

      &__button {
        width: 100%;
        margin: 50px 0 0 0;
        ${'' /* border: 1px solid yellow; */}
        float: right;

        button {
          border-radius: 5px;
          width: 75%;
          height: 85px;
          border: 3px solid white;
          background-color: transparent;
          color: white;
          font-weight: 800;
          font-size: 1.5em;
          cursor: pointer;
        }
      }
    }

    &__container {
        ${'' /* position: absolute; */}
        float: right;
        width: 50%;
        height: 150px;
        ${'' /* border: 1px solid green; */}
      }

    .slick-slide {
    height: 450px !important;
    ${'' /* display: flex; */}
    flex-flow: column;
    align-items: right;
  }

  .slick-arrow {
    display: none !important;
  }

  .slick-dots li {
    margin: 0 20px;
    button {
    &::before {
      color: white;
      font-size: 14px;
      }
    }
  }
}
`;

const HomePageHeaderStyles = OuterStyledSection.extend`
  height: 300px;
  margin: -70px 0 0 0;
  @media(min-width: ${({ theme }) => theme.medium.start}) {
    height: 600px;
  }
  @media(min-width: ${({ theme }) => theme.large.start}) {
    heigth: 800px;
  }
  .home-page-header {
    &__inner {
      height: 100%;
      padding: 0px;
      margin: 0;
      width: 100%;
      max-width: 100% !important;
      @media (min-width: ${({ theme }) => theme.large.start}) {
        margin: auto;
      }
    }
    
    &__cover {
      z-index: 1;
      width: 100%;
      ${'' /* border: 1px solid red; */}
      position: absolute;
      background-color: rgba(0,0,0,0.3);
      @media(min-width: ${({ theme }) => theme.medium.start}) {
        height: 600px;
      }
      @media(min-width: ${({ theme }) => theme.large.start}) {
        heigth: 800px;
      }
    }

    &__image {
      background-color: white;
      width: 100%;
      height: 100%;
      background-image: url('/images/header.png');
      background-repeat: no-repeat;
      background-size: 100%;
      background-position-x: 0%;
      background-position-y: 80%;
    }
  }
`