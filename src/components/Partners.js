import React from 'react'
import styled from 'styled-components'

import OuterStyledSection from './StyledSlatOuter'
import InnerStyledSection from './StyledSlatInner'

export const Partners = () => {
  return (
    <PartnersSectionStyled>
      <OuterStyledSection className='partners__outer'>
        <InnerStyledSection className='partners__inner'>
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
        </InnerStyledSection>
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

        &__inner {
            height: inherit;
            padding: 0;
            font-size: 16px;
            letter-spacing: 1.2px;
            display: flex;
            flex-flow: column;
            flex-direction: row;
            align-items: flex-start;
            @media (min-width: ${({theme}) => theme.medium.start}) {
                width: 90%;
                font-size: 20px;
                letter-spacing: 1.5px;
            }
            @media (min-width: ${({ theme }) => theme.large.start}) {
               width: 100%;
               justify-content: none !important;
            } 
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
                p { 
                    margin-right: 55%;
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
                        height: 80%;
                        p {
                            font-family: ${({theme}) => theme.baseFont};
                            margin: 0;
                            margin-top: 65%;
                            color: white;
                        }

                        @media (min-width: ${({ theme }) => theme.medium.start}) {  
                            margin-top: 95%;
                            width: 60%;
                            height: 60%;
                            p {
                                width: 100%;
                                margin-top: 150px;
                                font-size: 25px;
                            }
                        } 

                        @media (min-width: ${({ theme }) => theme.medium.end}) {  
                            margin-top: 75%;
                            p {
                                margin-top: 150 px;
                            }
                        } 

                        @media (min-width: ${({ theme }) => theme.large.start}) {  
                            margin-top: 0%;
                            width: 60%;
                            height: 45%;
                            p {
                                margin-top: 50%;
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
                        height: 50%;
                        p {
                            font-family: ${({theme}) => theme.baseFont};
                            margin: 0;
                            margin-top: 75%;
                            color: white;
                        }

                        @media (min-width: ${({ theme }) => theme.medium.start}) { 
                            width: 30%;
                            height: 35%;
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
                            width: 40%;
                            height: 40%;   
                            p {
                                margin-top: 70%;
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