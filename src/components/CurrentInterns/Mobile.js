import React, { Component } from 'react'
import StyledSlatOuter from '../StyledSlatOuter'
import StyledSlatInner from '../StyledSlatInner'
import { InternLeft } from './InternLeft';
import { InternRight } from './InternRight';

export class Mobile extends Component {
  render() {
    return (
      <MapStyles className='current-interns'>
        <StyledSlatInner className='current-interns__inner'>
          <h2 className='current-interns__title'>
            OUR CURRENT
          </h2>
          <h2 className='current-interns__title'>
            INT2 INTERNS
          </h2>
          <div className='current-interns__content'>
            <InternLeft
              bgImage='header.png'
              title='Eduardo Chávez'
              text='Seattle, WA'
            />
            <InternRight
              bgImage='header.png'
              title='Josué Morales'
              text='Seattle, WA'
            />
            <InternLeft
              bgImage='header.png'
              title='Victor Flamenco'
              text='Chemnitz, Germany'
            />
            <InternRight
              bgImage='header.png'
              title='José Maza'
              text='Chemnitz, Germany'
            />
          </div>
        </StyledSlatInner>
      </MapStyles>
    )
  }
}

const MapStyles = StyledSlatOuter.extend`
  margin: 50px 0 0 0;
  height: 850px;
  display: block;
  overflow: hidden;
  @media(min-width: ${({ theme }) => theme.medium.start}) {
    display: none;
  }
  .current-interns {
    &__inner {
      overflow: hidden;
    }
    &__title {
      margin: 0 0 0 50px;
      text-align: left;
      color: ${({ theme }) => theme.blue};
      font-size: 2.4em;
    }
    &__content {
      padding-top: 50px;
    }
  }
`