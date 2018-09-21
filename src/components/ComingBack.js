import React from 'react'
import styled from 'styled-components'

export const ComingBack = () => {
  return (
    <ComingBackStyles>
      <div id="coming-back" className="coming-back">
        <div className="coming-back__header">
          <h1 className="coming-back__header__title">COMING BACK</h1>
          <p className="coming-back__header__text">
            What kind of opportunities lie ahead after returning to El Salvador?
          </p>
        </div>
        <div className="coming-back__items row justify-content-center">
          <div className="coming-back__item col-sm-12 col-lg-4">
            <img className="coming-back__item__image" src="https://int2.blob.core.windows.net/public/svg/comingback-startup.svg" alt="startup"/>
            <h2 className="coming-back__item__title">Create your own start up</h2>
            <p className="coming-back__item__text">
              With the experience obtained by the participants and the exposure to new technologies 
              and business models some of them have decided to start their own startup.
            </p>
          </div>
          <div className="coming-back__item col-sm-12 col-lg-4">
            <img className="coming-back__item__image coming-back__item__image--right" src="https://int2.blob.core.windows.net/public/svg/comingback-korinver.svg" alt="korinver"/>
            <h2 className="coming-back__item__title">Work with Korinver</h2>
            <p className="coming-back__item__text">
              Every participant returns with a contract for 2 years. 
              Each one keeps working with their receiving company as a continuation of the training 
              that was obtained abroad.
            </p>
          </div>
          <div className="coming-back__item col-sm-12 col-lg-4">
            <img className="coming-back__item__image" src="https://int2.blob.core.windows.net/public/svg/comingback-work.svg" alt="workremotely"/>
            <h2 className="coming-back__item__title">Work internationally </h2>
            <p className="coming-back__item__text">
              The establishment of long term alliances with our partners allow us to keep 
              working with them from El Salvador after the contract period is finished.
            </p>
          </div>
        </div>
      </div>
    </ComingBackStyles>
  )
}


const ComingBackStyles = styled.div`
    .coming-back {
      padding: 0 5%;
      padding-bottom: 20vh;
      font-family: ${({theme}) => theme.baseFont};
      &__header {
        text-align: left;

        &__title {
          color: ${({theme}) => theme.blue};
          font-weight: bold;
        }
        &__text {
          font-size: 1em;
          @media(min-width: ${({theme}) => theme.medium.start}) {
            font-size: 1.25em;
          }
        }
      }

      &__items {
      }

      &__item {
        text-align: center;
        @media(min-width: ${({theme}) => theme.medium.start}) {
          text-align: left;
        }
        @media(min-width: ${({theme}) => theme.large.start}) {
          text-align: center;
        }
        &__image {
          max-width: 100px;
          @media(min-width: ${({theme}) => theme.medium.start}) {
            max-width: 150px;
            padding: 25px;
            float: left;
          }
          @media(min-width: ${({theme}) => theme.large.start}) {
            max-width: 200px;
            padding: 0px;
            float: none;
          }
          &--right{
            @media(min-width: ${({theme}) => theme.medium.start}) {
            float: right;
            }
            @media(min-width: ${({theme}) => theme.large.start}) {
              float: none;
            }
          }
        }
        &__title{
          font-size: 1.1em;
          color: ${({theme}) => theme.blue};
          @media(min-width: ${({theme}) => theme.medium.start}) {
            font-size: 1.5em;
          }
        }
        &__text{
          font-size: 0.9em;
          @media(min-width: ${({theme}) => theme.medium.start}) {
            font-size: 1.25em;
          }
        }
      }
    }
  }
`