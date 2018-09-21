import React,{Component} from 'react'
import styled from 'styled-components'

export class Slide extends Component {
  render(){
    const {name,pics,year,bio} = this.props.data;
    return (
      <SlideStyles pics={pics}>
        <div className="alumni-slide">
          <div className="alumni-slide__bg"></div>
          <div className="alumni-slide__info">
            <div className="alumni-slide__info__title"><h1>ALUMNI</h1></div>
            <p className="alumni-slide__info__name">{name}</p>
            <p className="alumni-slide__info__year">Int2 {year} Cohort</p>
            <ul className="alumni-slide__info__bio">
              {bio.map((item,index) => <li key={index}><span>{item.year}</span>&nbsp;- &nbsp;{item.text}</li>)}
            </ul>
          </div>
        </div>
      </SlideStyles>
    )
  }
}


const SlideStyles = styled.div`
  .alumni-slide {
    height: 60vh;
    text-align: center;
    color: white;
    background: url(${({pics}) => pics.circle}), #013B6D;
    background-size: 50%;
    background-position: top right,bottom center;
    background-repeat: no-repeat;
    position:relative;
    overflow: hidden;
    font-family: ${({theme}) => theme.baseFont};

    @media(min-width: ${({theme}) => theme.medium.start}) and (orientation: landscape){
      height: 85vh;
      background: url(${({pics}) => pics.large}), #013B6D;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: right center,left center;
    }

    @media(min-width: ${({theme}) => theme.medium.start}) and (orientation: portrait){
      height: 50vh;
      background: url(${({pics}) => pics.large}), #013B6D;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: right center,left center;
    }

    @media(min-width: ${({theme}) => theme.large.start}) {
      height: 82vh;
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

    &__info {
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 25px;
      text-align: left;
      padding-left: 2vw;
      @media(min-width: ${({theme}) => theme.medium.start}) {
        width: 50%;
        height: 100%;
      }

      &__title > h1{
        margin-top: 0;
      }

      &__name {
        width: 50%;
        font-size: 1em;
        font-weight: bold;
        margin: 0;
        @media(min-width: ${({theme}) => theme.medium.start}) {
          width: 100%;
          font-size: 1.1em;
        }
        @media(min-width: ${({theme}) => theme.large.start}) {
          font-size: 1.25em;
        }
      }

      &__year {
        width: 50%;
        font-size: 1em;
        font-weight: bold;
        margin: 0;
        @media(min-width: ${({theme}) => theme.medium.start}) {
          width: 100%;
          font-size: 1.1em;
        }
        @media(min-width: ${({theme}) => theme.large.start}) {
          font-size: 1.25em;
        }
      }

      &__bio {
        margin-top: 30%;
        padding-left: 15px;
        @media(min-width: 500px) {
          margin-top: 25px;
        }
        li{
        margin:0;
        margin-bottom: 15px;
        font-size: 0.8em;
        span {
          font-weight: bold;
        }
        @media(min-width: ${({theme}) => theme.medium.start}) and (orientation: landscape){
          margin-bottom: 10px;
          margin-top: 10px;
          font-size: 0.7em;
        }
        @media(min-width: ${({theme}) => theme.medium.start}) and (orientation: portrait){
          margin-bottom: 20px;
          margin-top: 25px;
          font-size: 1em;
        }
        @media(min-width: ${({theme}) => theme.large.start}) {
          font-size: 1.25em;
        }
      }
      }
    }
  }
`