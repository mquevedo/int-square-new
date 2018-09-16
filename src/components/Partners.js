import React from 'react'
import styled from 'styled-components'

import OuterStyledSection from './StyledSlatOuter'
import InnerStyledSection from './StyledSlatInner'

export const Partners = () => {
  return (
    <PartnersSectionStyled>
      <OuterStyledSection className='partners__outer'>
        <div className='partners__data'>
          <p> OUR PARTNERS </p>
          <div className='partners__data__gen-ui'>
            <div className='partners__data__gen-ui--layer'>
              <div className='partners__data__gen-ui--layer--logo'>
                <p> SEATTLE, WA </p></div>
            </div>
          </div>
          <div className='partners__data__ibes'>
            <div className='partners__data__ibes--layer'>
              <div className='partners__data__ibes--layer--logo'>
                <p> GERMANY </p>
              </div>
            </div>
          </div>
        </div>
      </OuterStyledSection>
    </PartnersSectionStyled>
  )
}

const PartnersSectionStyled = styled.div`
    .partners {
        &__outer {
            height: 700px;
            display: flex;
            justify-content: space-around;
            font-family: ${({theme}) => theme.baseFont};
            background-color: #E4E4E4;  
        }

        &__data {
            justify-content: space-evenly;
            
            p {
                margin-right: 70px;
                color: ${({theme}) => theme.blue};
                font-weight: bold;
                font-size: 25px;
            }

             @media (min-width: ${({ theme }) => theme.medium.start}) {
                width: 100%;
                padding-left: 40px;
                padding-right: 40px;
                p { 
                    text-align: left;
                    width: 100%;
                    font-size: 35px;
                }
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }   
              

            @media (min-width: ${({ theme }) => theme.large.start}) {
                width: 100%;
                p { 
                    margin-right: 72%;
                    width: 100%;
                    font-size: 35px;
                }
            }   

              &__gen-ui {
                  width: 300px;
                  height: 300px;
                  background-image: url('https://int2.blob.core.windows.net/public/images/gen-ui-programmers.jpg');
                  background-size: cover;
                  background-repeat: no-repeat;
                  background-position: center;      

                  &--layer {
                    display: flex;
                    flex-direction: column-reverse;
                    background-color: rgba(91, 187, 87, 0.7);
                    width: 100%;
                    height: 100%;

                    &--logo {
                        background-image: url('https://int2.blob.core.windows.net/public/images/general-ui-w.png');
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: center;      
                        width: 80%;
                        height: 100%;
                        p {
                            font-family: ${({theme}) => theme.baseFont};
                            margin: 0;
                            margin-top: 80%;
                            color: white;
                        }

                        @media (min-width: ${({ theme }) => theme.medium.start}) {  
                            margin-top: 0% !important;
                            margin-bottom: 20%;
                            width: 60%;
                            height: 60%;
                            p {
                                width: 100%;
                                margin-left: 20%;
                                margin-top: 200px;
                                font-size: 25px;
                            }
                        } 

                        @media (min-width: ${({ theme }) => theme.medium.end}) {  
                            margin-top: 75%;
                            p {
                                margin-top: 200px;
                            }
                        } 

                        @media (min-width: ${({ theme }) => theme.large.start}) {  
                            margin-top: 0%;
                            margin-bottom: 0;
                            width: 60%;
                            height: 100% !important;
                            p {
                                margin-top: 90%;
                                margin-left: 10%;
                                font-size: 30px;
                            }
                        } 
                    }
                  }

                @media (min-width: ${({ theme }) => theme.medium.start}) {
                    width: 50%;
                    height: 550px;
                }  
              
              }

              &__ibes {
                  width: 300px;
                  height: 300px;
                  background-image: url('https://int2.blob.core.windows.net/public/images/ibes-programers.jpg');
                  background-size: cover;
                  background-repeat: no-repeat;
                  background-position: center;      

                  &--layer {
                    display: flex;
                    flex-direction: column-reverse;
                    background-color: rgba(79, 109, 145, 0.7);
                    width: 100%;
                    height: 100%;

                    &--logo {
                        margin: 20px;
                        background-image: url('https://int2.blob.core.windows.net/public/images/Ibes-logo-w.png');
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: center;      
                        width: 50%;
                        height: 100%;
                        p {
                            font-family: ${({theme}) => theme.baseFont};
                            margin: 0;
                            margin-top: 115%;
                            color: white;
                        }

                        @media (min-width: ${({ theme }) => theme.medium.start}) {
                            margin-bottom: 38%;
                            width: 30%;
                            height: 40%;
                            p {
                                margin-top: 146px;
                                font-size: 28px;
                            }
                        } 

                        @media (min-width: ${({ theme }) => theme.medium.end}) {  
                            height: 30%;
                            p {
                                margin-top: 130px;
                            }
                        } 

                        @media (min-width: ${({ theme }) => theme.large.start}) {
                            margin-bottom: 0%;
                            width: 40%;
                            height: 100%;   
                            p {
                                margin-top: 125%;
                                font-size: 45px;
                            }
                        } 
                    }
                  }   
                  @media (min-width: ${({ theme }) => theme.medium.start}) {
                        width: 50%;
                        height: 550px;
                  }               
              }
        }
    }
`