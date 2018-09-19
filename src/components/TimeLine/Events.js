import React, { Component } from 'react'
import styled from 'styled-components'
import { EventUp } from './EventUp'
import { EventDown } from './EventDown'
export class Events extends Component {
  render() {
    return (
      <Container>
        <Line />
        <EventDown
          title='2014'
          text='lorem ipsum dolor sit aem'
        />
        <EventUp 
          title='2015'
          text='lorem ipsum dolor sit aem'
        />
        <EventDown
          title='2016'
          text='lorem ipsum dolor sit aem'
        />
        <EventUp
          title='2017'
          text='lorem ipsum dolor sit aem'
        />
        <EventDown
          title='2018'
          text='lorem ipsum dolor sit aem'
        />
      </Container>
    )
  }
}

const Line = styled.div`
  border: 1px solid ${({ theme }) => theme.blue};
  width: 80%;
  position: absolute;
`

const Container = styled.div`
  ${'' /* border: 1px solid black; */}
  display: none;
  @media(min-width: ${({ theme }) => theme.medium.end}) {
    ${'' /* display: block; */}
    display: flex;
  }
  margin: 0 auto;
  width: 80%;
  height: 80%;
  justify-content: center;
  align-items: center;
`