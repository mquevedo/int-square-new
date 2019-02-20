import React, { Component } from 'react'
import styled from 'styled-components'
import { EventUp } from './EventUp'
import { EventDown } from './EventDown'
import data from '../../lib/timeline'
export class Events extends Component {
  render() {
    return (
      <Container>
        <Line />
        {
          data.map((section, index) => {
            return (index % 2) === 0
              ?
              <EventUp
                key={index}
                title={section.title}
                text={section.text}
              />
              :
              <EventDown
                key={index}
                title={section.title}
                text={section.text}
              />
          })
        }
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