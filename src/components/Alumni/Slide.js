import React from 'react'
import styled from 'styled-components'

export const Slide = ({pic}) => {
  return (
    <SlideStyles pic={pic}>
      <div className="alumni-slide">
        <div className="alumni-slide__bg"></div>
        <div className="alumni-slide__title">
          <h1>ALUMNI</h1>
        </div>
        <div className="alumni-slide__info">
          <p className="alumni-slide__info__quote">Lorem Ipsum dolor sit amet.</p>
          <p className="alumni-slide__info__person">student info</p>
        </div>
      </div>
    </SlideStyles>
  )
}


const SlideStyles = styled.div`
  .alumni-slide {
    height: 90vh;
    background: #2196f3;
    text-align: center;
    color: white;
    background: url(${({pic}) => pic}), #013B6D;
    background-size: contain;
    background-position: right center,left center;
    background-repeat: no-repeat;
    position:relative;
    overflow: hidden;

    &__bg {
      width: 50%;
      height: 100%;
      background: #013B6D;
      transform: skew(-10deg);
    }

    &__title {
      position: absolute;
      top: 0;
      left: 5vw;
    }

    &__info {
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      border:3px solid yellow;
      padding: 25px;
      text-align: left;
      padding-left: 5%;

      &__quote {
        margin-top: 35%;
        font-size: 2em;
      }

      &__quote::before {
       content: url(/svg/icon--quotes--left.svg);
      }

      &__quote::after {
       content: url(/svg/icon--quotes--right.svg);
      }
      
      &__person {
        font-size: 2em;
      }
    }
  }
`
