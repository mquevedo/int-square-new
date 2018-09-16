import React from 'react'
import styled from 'styled-components'

import StyledSlatOuter from '../StyledSlatOuter'
import StyledSlatInner from '../StyledSlatInner'
import { EXTERNAL_LINKS } from '../../lib/appConstants'

export const BrandsSection = () => {
  return (     
    <BrandsSectionStyle>
      <StyledSlatOuter className='brands__outer'>
        <StyledSlatInner className='brands__inner'>
          <p>Friends who make INT2 possible:</p>
          <a
            className='brands__logo brands__logo--us-embassy'
            href={EXTERNAL_LINKS.US_EMBASSY}
            target='_blank'
            rel='noopener noreferrer'
          ></a>
          <a
            className='brands__logo brands__logo--ed-usa'
            href={EXTERNAL_LINKS.ED_USA}
            target='_blank'
            rel='noopener noreferrer'
          />
          <a
            className='brands__logo brands__logo--probesa'
            href={EXTERNAL_LINKS.ED_USA}
            target='_blank'
            rel='noopener noreferrer'
          />
        </StyledSlatInner>
      </StyledSlatOuter>
    </BrandsSectionStyle>
  )
}

const BrandsSectionStyle = styled.div`
  .brands {
    &__outer {
      height: 300px;
        p {
            width: 100%;
            margin: 0;
            font-size: 20px;
            font-weight: 600;
            color: ${({ theme }) => theme.blue};
            text-align: left;
            @media(min-width: ${({theme}) => theme.large.start}) {
                margin-bottom: 0px;
                font-size: 35px;
            }
        }
        @media(min-width: ${({theme}) => theme.small.start}) {
          height: 300px;
        }
        @media(min-width: ${({theme}) => theme.medium.inner}) {
          height: 330px;
        }
        @media(min-width: ${({theme}) => theme.medium.start}) {
          height: 280px;
        }
    }

    &__inner {
      margin: -40px 15px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      @media(min-width: ${({theme}) => theme.large.start}) {
        margin: auto;
      }
    }

    &__logo {
      width: 45%;
      height: 200px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center top;

      @media(min-width: ${({theme}) => theme.medium.start}) {
        width: 30%;
        background-position: center bottom;
      }

      @media(min-width: ${({theme}) => theme.large.start}) {
        background-position: center bottom;
      }
      
      &--us-embassy {
        background-image: url(https://int2.blob.core.windows.net/public/brandsection/brands-us-embassy.png);
        background-position: left;
      }

      &--ed-usa {
        background-image: url(https://int2.blob.core.windows.net/public/brandsection/brands-edusa.png);
        background-position: left center;
      }

      &--probesa {
        background-image: url(https://int2.blob.core.windows.net/public/brandsection/brands-probesa.png);
        margin: auto;
        @media(min-width: ${({theme}) => theme.medium.start}) {
          margin: 0;
          background-position: center;
        }
      }
    }
  }
`