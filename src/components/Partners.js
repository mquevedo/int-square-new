import React from 'react'
import styled from 'styled-components'

import OuterStyledSection from './StyledSlatOuter'

export const Partners = () => {
  return (
    <PartnersSectionStyled>
      <OuterStyledSection id="partners" className='partners__outer'>
        <div className='partners__data'>
          <p> OUR PARTNERS </p>
          <div className='partners__data__gen-ui'>
            <div className='partners__data__gen-ui--logo'>
              <p> SEATTLE, WA </p>
            </div>
          </div>
          <div className='partners__data__ibes'>
            <div className='partners__data__ibes--logo'>
              <p> CHEMNITZ, GERMANY </p>
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
                  height: 300px;
                  background-image: url('${process.env.PUBLIC_URL}/images/partners-gen-ui.jpg');
                  background-size: cover;
                  background-repeat: no-repeat;
                  background-position: center;     

                    &--logo {
                        display: flex;
                        flex-direction: column-reverse;
                        justify-content: center;
                        background-image: url('${process.env.PUBLIC_URL}/images/partners-gen-ui-logo.png');
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: center;      
                        width: 80%;
                        height: 100%;
                        p {
                            font-family: ${({theme}) => theme.baseFont};
                            margin: 0;
                            margin-top: 50%;
                            color: white;
                            margin-left: 10%;
                        }

                        @media (min-width: ${({ theme }) => theme.medium.start}) {  
                            p {
                                margin-left: 10%;
                                font-size: 25px;
                            }
                        } 

                        @media (min-width: ${({ theme }) => theme.medium.end}) {  
                            p {
                                font-size: 40px;
                            }
                        } 

                        @media (min-width: ${({ theme }) => theme.large.start}) {  
                            p {
                              font-size: 50px;
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
                  background-image: url('${process.env.PUBLIC_URL}/images/partners-ibes.jpg');
                  background-size: cover;
                  background-repeat: no-repeat;
                  background-position: center;      
                  

                    &--logo {
                        display: flex;
                        flex-direction: column-reverse;
                        flex-wrap: wrap;
                        background-image: url('${process.env.PUBLIC_URL}/images/partners-ibes-logo.png');
                        background-size: contain;
                        background-repeat: no-repeat;
                        background-position: center;      
                        width: 50%;
                        height: 100%;
                        margin-left: 4%;
                        p {
                            font-family: ${({theme}) => theme.baseFont};
                            margin: 0;
                            width: 200%;
                            text-align: left;
                            margin-bottom: 56%;
                            color: white;
                        }

                        @media (min-width: ${({ theme }) => theme.medium.start}) {
                            p {
                                margin-bottom: 80%;
                                font-size: 35px;
                            }
                        } 

                        @media (min-width: ${({ theme }) => theme.medium.end}) {  
                            p {
                                margin-bottom: 68%;
                                font-size: 40px;
                            }
                        } 

                        @media (min-width: ${({ theme }) => theme.large.start}) {
                            p {
                                font-size: 50px;
                                margin-bottom: 36%;
                                
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