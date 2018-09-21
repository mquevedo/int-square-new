import React, { Component } from 'react'
import styled from 'styled-components'
import OuterStyledSection from '../StyledSlatOuter'
import { Events } from './Events'
import { EventsMobile } from './EventsMobile';

export class TimeLine extends Component {
  render() {
    return (
      <TimeLineStyles id='ourstory'>
        <Title>
          <h2>OUR STORY</h2>
        </Title>
        <Events />
        <EventsMobile />
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
  @media(max-width: ${({ theme }) => theme.medium.end}) {
    height: auto;
    padding-bottom: 25px;
  }
  @media(min-width: ${({ theme }) => theme.large.start}) {
    heigth: 600px;
  }
`;