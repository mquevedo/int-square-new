import React,{Component} from 'react'
import styled from 'styled-components'

export class Slide extends Component {
  render(){
    const {name,pic,year,bio} = this.props.data;
    return (
      <SlideStyles pic={pic}>
        <div className="alumni-slide">
          <div className="alumni-slide__bg"></div>
          <div className="alumni-slide__info">
            <div className="alumni-slide__title"><h1>ALUMNI</h1></div>
            <p className="alumni-slide__info__name">{name} &nbsp;- &nbsp; Int2 {year} Cohort</p>
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
    height: 70vh;
    text-align: center;
    color: white;
    background: url(${({pic}) => pic}), #013B6D;
    background-size: 100% 75%;
    background-position: bottom center,top center;
    background-repeat: no-repeat;
    position:relative;
    overflow: hidden;
    font-family: ${({theme}) => theme.baseFont};
    @media(min-width: ${({theme}) => theme.medium.start}) {
      background-size: 50% 100%;
      background-position: right center,left center;
    }
    @media(min-width: ${({theme}) => theme.large.start}) {
      height: 90vh;
      background-size: 60% 100%;
    }

    &__bg {
      background: #013B6D;
      @media(min-width: ${({theme}) => theme.large.start}) {
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
      width: 50%;
      height: 100%;
      padding: 25px;
      text-align: left;
      padding-left: 3vw;

      &__name {
        font-size: 1em;
        font-weight: bold;
        margin: 0;
        @media(min-width: ${({theme}) => theme.large.start}) {
          font-size: 1.25em;
        }
      }

      &__bio > li{
        margin:0;
        margin-bottom: 20px;
        font-size: 0.8em;
        span {
          font-weight: bold;
        }
        @media(min-width: ${({theme}) => theme.large.start}) {
          font-size: 1em;
        }
        @media(min-width: ${({theme}) => theme.large.start}) {
          font-size: 1.25em;
        }
      }
    }
  }
`