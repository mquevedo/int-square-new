import React,{Component} from 'react'
import styled from 'styled-components'

export class Slide extends Component {
  render(){
    const {data} = this.props
    return (
      <SlideStyles pic={data.pic}>
        <div className="alumni-slide">
          <div className="alumni-slide__bg"></div>
          <div className="alumni-slide__title">
            <h1>ALUMNI</h1>
          </div>
          <div className="alumni-slide__info">
            <p className="alumni-slide__info__quote">{data.text}</p>
            <p className="alumni-slide__info__name">{data.name}</p>
            <p className="alumni-slide__info__alumni">Int2 Alumni</p>
            <p className="alumni-slide__info__year">{data.year}</p>
          </div>
        </div>
      </SlideStyles>
    )
  }
}


const SlideStyles = styled.div`
  .alumni-slide {
    height: 50vh;
    text-align: center;
    color: white;
    background: url(${({pic}) => pic}), #013B6D;
    background-size: contain;
    background-position: bottom center,top center;
    background-repeat: no-repeat;
    position:relative;
    overflow: hidden;
    font-family: ${({theme}) => theme.baseFont};
    @media(min-width: ${({theme}) => theme.medium.start}) {
      background-position: right center,left center;
    }
    @media(min-width: ${({theme}) => theme.large.start}) {
      height: 90vh;
    }

    &__bg {
      background: #013B6D;
      @media(min-width: ${({theme}) => theme.medium.start}) {
        width: 50%;
        height: 100%;
      }
      @media(min-width: ${({theme}) => theme.large.start}) {
        transform: skew(-10deg);
      }
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
      padding: 25px;
      text-align: left;
      padding-left: 5vw;

      &__quote {
        margin-top: 35%;
        font-size: 2em;
        @media(min-width: ${({theme}) => theme.medium.start}) {
          margin-top: 50%;
          font-size: 2em;
        }
        @media(min-width: ${({theme}) => theme.large.start}) {
          margin-top: 35%;
          font-size: 2em;
        }
      }

      &__quote::before {
        display: inline-block;
        content: url(/svg/icon--quotes--left.svg);
        width: 25px;
      }

      &__quote::after {
       content: url(/svg/icon--quotes--right.svg);
       display:inline-block;
       width: 25px;
      }
      
      &__name {
        font-size: 1.1em;
        margin: 0;
        @media(min-width: ${({theme}) => theme.large.start}) {
          margin:0 40px;
        }
      }

      &__alumni {
        font-size: 1.1em;
        font-weight: bold;
        margin: 0;
        @media(min-width: ${({theme}) => theme.large.start}) {
          margin:0 40px;
        }
      }

      &__year {
        font-size: 1.1em;
        font-weight: bold;
        margin: 0;
        @media(min-width: ${({theme}) => theme.large.start}) {
          margin:0 40px;
        }
      }
    }
  }
`