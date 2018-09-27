import React, { Component } from 'react'
import StyledSlatOuter from '../StyledSlatOuter'
import StyledSlatInner from '../StyledSlatInner'

export class Desktop extends Component {
  render() {
    return (
      <MapStyles className='current-interns' id='currentint2'>
        <StyledSlatInner className='current-interns__inner'>
          <h2 className='current-interns__title'>
            OUR CURRENT
          </h2>
          <h2 className='current-interns__title'>
            INT2 INTERNS
          </h2>
          <div className='current-interns__bgImage'>
            <div className='current-interns__seattle'>
              <div className='current-interns__seattle__first'>
                <div className='current-interns__seattle__first__horizontal-line'>
                  <div className='current-interns__seattle__first__horizontal-line__circle' />
                </div>
                <div className='current-interns__seattle__first__vertical-line' />
                <div className='current-interns__seattle__first__avatar avatar'>
                  <div className='avatar__container'>
                    <div className='avatar__container__bgImage bgImage' />
                  </div>
                  <p className='avatar__title'>
                    Eduardo Chávez
                  </p>
                  <p className='avatar__text'>
                    Seattle, WA
                  </p>
                </div>
              </div>
              <div className='current-interns__seattle__second'>
                <div className='current-interns__seattle__second__horizontal-line'>
                  <div className='current-interns__seattle__second__horizontal-line__circle' />
                </div>
                <div className='current-interns__seattle__second__vertical-line' />
                <div className='current-interns__seattle__second__avatar avatar'>
                  <div className='avatar__container'>
                    <div className='avatar__container__bgImage bgImage' />
                  </div>
                  <p className='avatar__title'>
                    Josué Morales
                  </p>
                  <p className='avatar__text'>
                    Seattle, WA
                  </p>
                </div>
              </div>
            </div>

            <div className='current-interns__germany'>
              <div className='current-interns__germany__first'>
                <div className='current-interns__germany__first__horizontal-line' />
                <div className='current-interns__germany__first__vertical-line'>
                  <div className='current-interns__germany__first__vertical-line__circle' />
                </div>
                <div className='current-interns__germany__first__avatar avatar'>
                  <div className='avatar__container'>
                    <div className='avatar__container__bgImage bgImage' />
                  </div>
                  <p className='avatar__title'>
                    Victor Flamenco
                  </p>
                  <p className='avatar__text'>
                    Chemnitz, Germany
                  </p>
                </div>
              </div>
              <div className='current-interns__germany__second'>
                <div className='current-interns__germany__second__vertical-line'>
                  <div className='current-interns__germany__second__vertical-line__circle' />
                </div>
                <div className='current-interns__germany__second__avatar avatar'>
                  <div className='avatar__container'>
                    <div className='avatar__container__bgImage bgImage' />
                  </div>
                  <p className='avatar__title'>
                    José Maza
                  </p>
                  <p className='avatar__text'>
                    Chemnitz, Germany
                  </p>
                </div>
              </div>
            </div>
          </div>
        </StyledSlatInner>
      </MapStyles>
    )
  }
}

const MapStyles = StyledSlatOuter.extend`
  margin: 50px 0 0 0;
  height: 1100px;
  display: none;
  overflow: hidden;
  @media(min-width: ${({ theme }) => theme.medium.start}) {
    height: 950px;
    display: block;
  }
  @media(min-width: ${({ theme }) => theme.large.start}) {
    height: 1100px;
  }

  .avatar {
    position: absolute;
    width: 210px;
    min-height: 100px;
    &__container {
      margin: 0 auto;
      width: 100px;
      height: 100px;
      border: 3px solid #000;
      border-radius: 50%;
      ${'' /* display: flex; */}
      ${'' /* justify-content: space-around; */}
      ${'' /* align-items: center; */}
      &__bgImage {
        box-sizing: border-box;
        margin: 3% 0 0 4%;
        width: 94%;
        height: 94%;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    p {
      margin: 5px 0 5px 0;
    }
    &__title {
      font-size: 0.9em;
      font-weight: 600;

    }
    &__text {
      padding: 0 10px 0 10px;
      font-size: 0.84em;
    }
  }

  .current-interns {
    &__inner {
      overflow: hidden;
    }
    &__title {
      margin: 0 0 0 0px;
      text-align: left;
      color: ${({ theme }) => theme.blue};
      font-size: 2.4em;
    }
    &__bgImage {
      margin: 0 auto;
      margin-top: 450px;
      width: 500px;
      background-image: url('/images/mapa.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 250px;
    }
    &__seattle {
      position: absolute;
      &__first {
        &__avatar {
          margin: -300px 0 0 -170px;
          .bgImage {
            background-image: url('/images/avatar--eduardo.png') !important;
          }
        }
        &__horizontal-line {
          position: absolute;
          border: 2px solid #000;
          width: 130px;
          margin: 95px 0 0 -70px;
          &__circle {
            position: absolute;
            box-sizing: border-box;
            border-radius: 50%;
            width: 13px;
            height: 13px;
            border: 3px solid #000;
            margin: -6.5px 0 0 125px;
            background-color: #FFF;
          }
        }
        &__vertical-line {
          position: absolute;
          border: 2px solid #000;
          height: 205px;
          margin: -105px 0 0 -70px;
        }
      }

      &__second {
        &__avatar {
          margin: -185px 0 0 20px;
          .bgImage {
            background-image: url('/images/avatar--josue.png') !important;
          }
        }
        &__horizontal-line {
          position: absolute;
          border: 2px solid #000;
          width: 45px;
          margin: 95px 0 0 85px;
          &__circle {
            position: absolute;
            box-sizing: border-box;
            border-radius: 50%;
            width: 13px;
            height: 13px;
            border: 3px solid #000;
            margin: -6.5px 0 0 -10px;
            background-color: #FFF;
          }
        }
        &__vertical-line {
          position: absolute;
          border: 2px solid #000;
          height: 115px;
          margin: -20px 0 0 125px;
        } 
      }
    }

    &__germany {
      position: absolute;
      &__first {
        &__avatar {
          margin: -390px 0 0 240px;
          .bgImage {
            background-image: url('/images/avatar--victor.png') !important;
          }
        }
        &__horizontal-line {
          position: absolute;
          border: 2px solid #000;
          width: 180px;
          margin: -50px 0 0 360px;
        }
        &__vertical-line {
          position: absolute;
          border: 2px solid #000;
          height: 130px;
          margin: -50px 0 0 360px;
          &__circle {
            position: absolute;
            box-sizing: border-box;
            border-radius: 50%;
            width: 13px;
            height: 13px;
            border: 3px solid #000;
            margin: 125px 0 0 -6.5px;
            background-color: #FFF;
          }
        }
      }
      &__second {
        position: absolute;
        &__avatar {
          margin: -130px 0 0 525px;
          .bgImage {
            background-image: url('/images/avatar--jose.png') !important;
          }
        }
        &__vertical-line {
          position: absolute;
          border: 2px solid #000;
          height: 300px;
          margin: -220px 0 0 340px;
          &__circle {
            position: absolute;
            box-sizing: border-box;
            border-radius: 50%;
            width: 13px;
            height: 13px;
            border: 3px solid #000;
            margin: 295px 0 0 -6.5px;
            background-color: #FFF;
          }
        }
      }
    }

    @media(min-width: ${({ theme }) => theme.medium.start}) {
      &__title {
        margin: 0 0 0 50px;
      }
      &__bgImage {
        height: 300px;
        width: 500px;
      }
      &__seattle {
        &__first {
          &__avatar {
            margin: -300px 0 0 -130px;
          }
          &__horizontal-line {
            border: 1.5px solid #000;
            margin: 70px 0 0 -35px;
            width: 80px;
            &__circle {
              margin: -6.5px 0 0 70px;
            }
          }
          &__vertical-line {
            border: 1.5px solid #000;
            height: 205px;
            margin: -135px 0 0 -35px;
          }
        }
        &__second {
          &__avatar {
            margin: -195px 0 0 10px;
          }
          &__horizontal-line {
            border: 1.5px solid #000;
            margin: 70px 0 0 60px;
            &__circle {
              margin: -6.5px 0 0 -10px;
            }
          }
          &__vertical-line {
            border: 1.5px solid #000;
            height: 115px;
            margin: -42px 0 0 105px;
          } 
        }
      }

      &__germany {
        &__first {
          &__avatar {
            margin: -400px 0 0 140px;
          }
          &__horizontal-line {
            border: 1.5px solid #000;
            width: 180px;
            margin: -70px 0 0 260px;
          }
          &__vertical-line {
            border: 1.5px solid #000;
            height: 130px;
            margin: -70px 0 0 260px;
            &__circle {
              border: 3px solid #000;
              margin: 125px 0 0 -6.5px;
            }
          }
        }
        &__second {
          &__avatar {
            margin: -130px 0 0 405px;
          }
          &__vertical-line {
            border: 1.5px solid #000;
            height: 300px;
            margin: -240px 0 0 240px;
            &__circle {
              border: 3px solid #000;
              margin: 295px 0 0 -6.5px;
            }
          }
        }
      }
    }
    @media(min-width: ${({ theme }) => theme.large.start}) {
      &__title {
        margin: 0 0 0 0px;
      }
      &__bgImage {
        height: 400px;
        width: 700px;
      }
      &__seattle {
        &__first {
          &__avatar {
            margin: -300px 0 0 -170px;
          }
          &__horizontal-line {
            margin: 95px 0 0 -70px;
            width: 130px;
            border: 2px solid #000;
            &__circle {
              margin: -6.5px 0 0 125px;
            }
          }
          &__vertical-line {
            border: 2px solid #000;
            height: 205px;
            margin: -110px 0 0 -70px;
          }
        }
        &__second {
          &__avatar {
            margin: -185px 0 0 20px;
          }
          &__horizontal-line {
            border: 2px solid #000;
            margin: 95px 0 0 85px;
            &__circle {
              margin: -6.5px 0 0 -10px;
            }
          }
          &__vertical-line {
            border: 2px solid #000;
            height: 115px;
            margin: -20px 0 0 125px;
          } 
        }
      }

      &__germany {
        &__first {
          &__avatar {
            margin: -390px 0 0 240px;
          }
          &__horizontal-line {
            border: 2px solid #000;
            width: 180px;
            margin: -50px 0 0 360px;
          }
          &__vertical-line {
            border: 2px solid #000;
            height: 130px;
            margin: -50px 0 0 360px;
            &__circle {
              border: 3px solid #000;
              margin: 125px 0 0 -6.5px;
            }
          }
        }
        &__second {
          &__avatar {
            margin: -130px 0 0 525px;
          }
          &__vertical-line {
            border: 2px solid #000;
            height: 300px;
            margin: -220px 0 0 340px;
            &__circle {
              border: 3px solid #000;
              margin: 295px 0 0 -6.5px;
            }
          }
        }
      }
    }
  }
`