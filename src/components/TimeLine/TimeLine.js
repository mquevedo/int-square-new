import React, { Component } from 'react'
import styled from 'styled-components'
import OuterStyledSection from '../StyledSlatOuter'
import { Events } from './Events'
import { EventsMobile } from './EventsMobile'
import { EXTERNAL_LINKS } from '../../lib/appConstants'

export class TimeLine extends Component {
  render() {
    return (
      <TimeLineStyles id='ourstory'>
        <Title>
          <h2>OUR STORY</h2>
        </Title>
        <div className="prompt-wrapper">
          <p className="prompt-wrapper__text">
            Since our foundation we have been an intern pipeline from El Salvador that brings talent and diversity to Seattle tech companies
          </p>
          <a
            href={EXTERNAL_LINKS.OUR_STORY}
            target='_blank'
            rel='noopener noreferrer'
          >
            Read more about our story
          </a>
        </div>
        <Events />
        <EventsMobile />
        <Title>
          <h2
            style={{
              margin: 0,
              fontSize: '1em'
            }}
          > Acceptance rate for this program is 5%</h2>
        </Title>
      </TimeLineStyles>
    )
  }
}

const Title = styled.div`
  padding: 0 0 0 40px;
  h2 {
    margin: 0;
    text-align: left;
    color: ${({theme}) => theme.blue};
    font-size: 2.4em;
  }
`

const TimeLineStyles = OuterStyledSection.extend`
  height: 600px;
  padding-bottom: 50px;
  @media(max-width: ${({ theme }) => theme.medium.end}) {
    height: auto;
    padding-bottom: 25px;
  }
  @media(min-width: ${({ theme }) => theme.large.start}) {
    heigth: 600px;
  }
  .prompt-wrapper {
    text-align: left;
    padding-left: 40px;
    &__text {
      margin-bottom: 5px;
    }
  }
`