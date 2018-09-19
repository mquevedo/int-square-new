import React, { Component } from 'react'
import styled from 'styled-components'
import { EventLeft } from './EventLeft';
import { EventRight } from './EventRight';
export class EventsMobile extends Component {
  render() {
    return (
      <Container>
        {/* <Line /> */}
        <EventLeft
          title='2014'
          text='lorem ipsum dolor in mobile'
        />
        <EventRight
          title='2015'
          text='lorem ipsum dolor sit aem'
        />
        <EventLeft
          title='2016'
          text='lorem ipsum dolor sit aem'
        />
        <EventRight
          title='2017'
          text='lorem ipsum dolor sit aem'
        />
        <EventLeft
          title='2018'
          text='lorem ipsum dolor sit aem'
        />
      </Container>
    )
  }
}

const Line = styled.div`
  border: 1px solid ${({ theme }) => theme.blue};
  width: 2%;
  height: 100%;
  position: absolute;
`

const Container = styled.div`
  ${'' /* position: absolute; */}
  ${'' /* border: 1px solid black; */}
  display: none;
  @media(max-width: ${({ theme }) => theme.medium.end}) {
    ${'' /* display: block; */}
    display: inline;
  }
  margin: 0 auto;
  width: 80%;
  min-height: 100%;
  ${'' /* justify-content: center; */}
  ${'' /* align-items: center; */}
`