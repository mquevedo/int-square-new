// @flow
import React from 'react'
import styled from 'styled-components'

import StyledSlatOuter from './StyledSlatOuter'
import StyledSlatInner from './StyledSlatInner'

export const Header = () => {
  return (
    <HeaderStyles>
      <StyledSlatOuter className='header__outer'>
        <StyledSlatInner className='header__inner'>
        </StyledSlatInner>
      </StyledSlatOuter>
    </HeaderStyles>
  )
}

const HeaderStyles = styled.div`
  .header {
    &__outer {
      max-width: 100%;
    }
    &__inner {
      width: 100%;
      height: 420px;
      max-width: 100%;
      background-image: url(/images/header.png);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`
