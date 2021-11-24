import React, { Component } from 'react'
import styled from 'styled-components'
import StyledSlatInner from './StyledSlatInner';
import StyledSlatOuter from './StyledSlatOuter';

export class Life extends Component {
  render() {
    return(
      <LifeStyles className='lifeasint' id='lifeasint'>
        <StyledSlatInner className='lifeasint__inner'>
          <div className='lifeasint__title'>
            <p>
              LIFE AS INT 2
            </p>
          </div>
          <div className='lifeasint__text'>
            <p>
              Besides of the technical training we obtained from this opportunity, we have also gained a valuable cultural experience by getting immersed in day-to-day interactions with people from abroad. Although at the beginning this looks like a huge challenge, we all understood that reaching out people from other backgrounds is not as difficult as it seems.
            </p>
          </div>
        </StyledSlatInner>
      </LifeStyles>
    )
  }
}

const LifeStyles = styled(StyledSlatOuter)`
  height: 375px;
  margin: 0;
  box-shadow: ${({ theme }) => theme.boxShadow};

  .lifeasint {

    &__inner {
      margin: 0;
      padding: 0;
      max-width: 100%;
      width: 100%;
      height: 100%;
      background-image: url(${process.env.PUBLIC_URL}/images/life--as--int.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    &__title {
      p {
        padding-left: 50px;
        margin-top: 70px;
        color: ${({ theme }) => theme.white};
        font-weight: 900;
        font-size: 2.4em;
        text-align: left;
      }
    }
    &__text {
      width: 45%;
      p {
        padding-left: 50px;
        color: ${({ theme }) => theme.white};
        font-weight: 200;
        font-size: 1.5em;
        text-align: left;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.small.end}) {
    height: 550px;
    .lifeasint {
      &__text {
        width: 95%;
        p {
          font-size: 1.2em;
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.medium.start}) {
    height: 500px;
    .lifeasint {
      &__text {
        width: 85%;
        p {
          font-size: 1.3em;
        }
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.large.start}) {
    height: 645px;
    .lifeasint {
      &__text {
        width: 55%;
        p {
          font-size: 1.5em;
        }
      }
    }
  }
`