import React from 'react'
import styled from 'styled-components'

export const ComingBack = () => {
  return (
    <ComingBackStyles>
      <div className="coming-back">
        <div className="coming-back__header">
          <h1 className="coming-back__header__title">COMING BACK</h1>
          <p className="coming-back__header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="coming-back__items row justify-content-center">
          <div className="coming-back__item col-sm-12 col-lg-4">
            <img className="coming-back__item__image" src="https://int2.blob.core.windows.net/public/svg/comingback-startup.svg" alt="startup"/>
            <h2 className="coming-back__item__title">Create your own start up</h2>
            <p className="coming-back__item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="coming-back__item col-sm-12 col-lg-4">
            <img className="coming-back__item__image coming-back__item__image--right" src="https://int2.blob.core.windows.net/public/svg/comingback-korinver.svg" alt="korinver"/>
            <h2 className="coming-back__item__title">Work with Korinver</h2>
            <p className="coming-back__item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="coming-back__item col-sm-12 col-lg-4">
            <img className="coming-back__item__image" src="https://int2.blob.core.windows.net/public/svg/comingback-work.svg" alt="workremotely"/>
            <h2 className="coming-back__item__title">Work Remotely</h2>
            <p className="coming-back__item__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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