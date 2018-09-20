import React from 'react'
import styled from 'styled-components'

import OuterStyledSection from './StyledSlatOuter'
import InnerStyledSection from './StyledSlatInner'

import { EXTERNAL_LINKS } from '../lib/appConstants'

export const ApplyNow = () => {
  return (
    <ReqsSectionsStyles className='req'>
      <OuterStyledSection className='req__outer'>
        <InnerStyledSection className='req__inner'>
          <div className='req__apply'>
            <p>APPLY NOW</p>
            <p className='req__apply__sub'>Requirements:</p>
          </div>

          <div className='req__data'>
            <div className='req__data__skills'>
              <div className='req__data__logos req__data__logos--gral-req'></div>
              <div className='req__data__dev'>
                <p className='req__data--gral-title'>General requirements:</p>
                <ul>
                  <li>Salvadorean Citizen</li>
                  <li>GPA: 7.0(Minimum) or higher</li>
                  <li>Command of HTML, CSS, JavaScript</li>
                  <li>Knowledge of C#/.NET, React/Redux, and Node.js</li>
                  <li>Understanding of API design (REST) and software design patterns (MS-MVC)</li>
                  <li>Knowledge of relational and non relational Databases (MS SQL, Posgres)</li>
                </ul>
              </div>
            </div>
            <div className='req__data__skills'>
              <div className='req__data__logos req__data__logos--jr-dev'></div>
              <div className='req__data__dev'>
                <p className='req__data--junior-title'>For Junior Inter:</p>
                <ul>
                  <li>Currently enrolled in 4th or 5th year of: B.S. in computer Sciences</li>
                </ul>
              </div>
            </div>
            <div className='req__data__skills'>
              <div className='req__data__logos req__data__logos--sr-dev'></div>
              <div className='req__data__dev'>
                <p className='req__data--junior-title'>For Senior Inter:</p>
                <ul>
                  <li>
                        Currently enrolled in a Master's Program in Computer Sciences
                        (applicants with a Bachelors Degree in CS waiting to outgrow their
                        first opportunity are also welcome to apply) 
                  </li>
                </ul>
              </div>
            </div>
            <div className='req__data__skills'>
              <div className='req__data__logos req__data__logos--other-skills'></div>
              <div className='req__data__dev'>
                <p className='req__data--skills-title' >Other Skills:</p>
                <ul>
                  <li>Command of Git.</li>
                  <li>Excellent research and learning skills</li>
                  <li>Advanced level of English - TOEFL ITP score 550</li>
                </ul>
              </div>
            </div>
          </div>
          <a href={EXTERNAL_LINKS.APPLY_NOW}>
            <div className='req__button'>
                Online Application Form
            </div>
          </a>
        </InnerStyledSection>
      </OuterStyledSection>
    </ReqsSectionsStyles>
  )
}

const ReqsSectionsStyles = styled.div`
   height: 100%;
   .req {
     &__outer {
      z-index: 1;
      height: 100%;
      display: flex;
      background-size: cover;
      background-position: bottom;
      background-repeat: no-repeat;
      background-image: url('https://int2.blob.core.windows.net/public/applynowsection/applynow-fondo.png');
      @media (min-width: ${({ theme }) => theme.large.start}) {
          height: 70%; 
      }
     }

     &__inner {
         padding: 25px;
     }

     &__apply {
        font-size: 18px;
        color: ${({theme}) => theme.white};
        font-weight: bold;
        font-family:  ${({theme}) => theme.baseFont};
        margin-top: 6%;
        width: 95vw;
        p {
          margin: 0;
          margin-left: -74%;
        }


         @media (min-width: ${({ theme }) => theme.medium.start}) {
           font-size: 25px;
          }

        @media (min-width: ${({ theme }) => theme.large.start}) {
          p {
            margin: 0;
            margin-left: 8%!important;
          }
        }

        &__sub {
          font-family:  ${({theme}) => theme.secondaryFont};
          margin-left: -70% !important;

          @media (min-width: ${({ theme }) => theme.large.start}) {
              margin: 0 !important;
              font-size: 28px;
          }
        }

        @media (min-width: ${({ theme }) => theme.large.start}) {
            text-align: left;
            margin-left: -6%;
            p {
              margin-left: 0%;
              font-size: 33px;
            }
        }
     }

     &__data {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: ${({theme}) => theme.baseFont};
        font-size: 18px;

         color: ${({theme}) => theme.white};
          ul {
            list-style-type: none;
            margin: 0 32px;
            align-items: flex-start;
            padding: 0;
            text-align: left;
            margin-left: 2%;

            li:before {
              content: '-';
            }
          }

          &__gral {
            margin: 3px;
          }


          &--gral-title {
              margin: 0;
              margin-left: -42%;
              font-weight: bold;
              margin-top: 6%;
          }

          &__junior {
            margin: 3px;
          }

          &--junior-title {
             font-weight: bold;
              margin: 0;
              margin-left: -55%;
              margin-top: 6%;
          }

          &--skills-title {
            font-weight: bold;
              margin: 0;
              margin-left: -65%;
              margin-top: 6%;
          }
        
        @media (min-width: ${({ theme }) => theme.large.start}) {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          margin-top: 5%; 
          flex-direction: row;
          justify-content: space-between;

        }

       @media (min-width: ${({ theme }) => theme.medium.start}) {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          font-size: 16px;
          margin-top: 5%; 
          flex-direction: row;
          justify-content: space-between;
        }

        &__logos {
          width: 100px;
          height: 100px;
          margin-top: 6%;
          margin-left: 32%;
          margin-bottom: 6%;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;

          @media (min-width: ${({ theme }) => theme.small.end}) {
            margin-left: 42%;
          }

          &--gral-req {
              background-image: url('https://int2.blob.core.windows.net/public/svg/Gral Requirements.svg');
              flex: 1;
          }

          &--jr-dev {
            background-image: url('https://int2.blob.core.windows.net/public/svg/Jr Dev.svg');
            flex: 1;
          }

          &--sr-dev {
            background-image: url('https://int2.blob.core.windows.net/public/svg/Sr Dev.svg');
            flex: 1;
          }

          &--other-skills {
            background-image: url('https://int2.blob.core.windows.net/public/svg/Other Skills.svg');
            flex: 1;
          }

           @media (min-width: ${({ theme }) => theme.large.start}) {
             margin: 0;
             width: 100px;
             height: 100px;        
          }

          @media (min-width: ${({ theme }) => theme.medium.start}) {
             margin: 0;
             width: 100px;
             height: 100px;        
          }
        }

        &__skills {
           @media (min-width: ${({ theme }) => theme.medium.inner}) {
            width: 100%;
            justify-content: space-around;
          }

          @media (min-width: ${({ theme }) => theme.medium.start}) {
            display: flex;
            width: 50%;
            min-height: 50%;
            justify-content: space-around;
          }
        }

        &__dev {
          flex: 3;
          font-size: 17px;
          margin: 0;
          text-align: left;
          p {
            margin: 0;
          }
          margin-bottom: 5%;
          
            @media (min-width: ${({ theme }) => theme.medium.inner}) {
                margin-bottom: 2%;
                font-size: 14px;
            }

            @media (min-width: ${({ theme }) => theme.medium.start}) {
               font-size: 15px;
               margin-bottom: 15%;
            }

        }
     }

     &__button {
      font-family: ${({theme}) => theme.baseFont};
        font-weight: bold;
        background-color: transparent;
        border: white 1px solid;
        border-radius: 8px;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        padding: 20px;
        margin: 4px 2px;
        cursor: pointer;

        @media (min-width: ${({ theme }) => theme.large.start}) {
            padding: 30px;
        }

        &:hover {
          background-color: #D6DBDF;
          color: black;
        }
      }

     }
   }
`
