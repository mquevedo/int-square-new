import React, { Component } from 'react'
import styled from 'styled-components'

export class EventLeft extends Component {
  render() {
    const { title, text } = this.props;
    return (
      <Event>
        <Line />
        <Content>
          {text}
        </Content>
        <ArrowDown>
          <div className='circle' />
        </ArrowDown>
        <CirclePoint className='circles'>
          <div className='circles__second'>
            <div className='circles__third' />
          </div>
        </CirclePoint>
        <Title>
          {title}
        </Title>
      </Event>
    )
  }
}

const Line = styled.div`
  border: 1px solid ${({ theme }) => theme.blue};
  height: 100%;
  z-index: -999999;
`

const Content = styled.div`
  position: absolute;
  overflow: hidden;
  padding: 5px;
  max-width: 25%;
  margin-left: 0px;
  ${'' /* left: 0px; */}
  border-bottom: 2px solid ${({ theme }) => theme.blue};
   @media(max-width: ${({ theme }) => theme.medium.end}) {
    margin-left: -275px;
    font-size: 0.75em;
  }
  @media(max-width: ${({ theme }) => theme.medium.start}) {
    margin-left: 0px;
    left: 10px;
  }
`

const Title = styled.div`
  position: absolute;
  margin-left: 100px;
`
const ArrowDown = styled.div`
  ${'' /* height: 60px; */}
  width: 60px;
  margin-left: -65px;
  border: 1px solid ${({ theme }) => theme.blue};
  position: absolute;
  .circle {
    ${'' /* top: 60px; */}
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.blue};
    position: absolute;
    margin: -4px 0 0 -5px;
  }

  @media(max-width: ${({ theme }) => theme.medium.start}) {
    width: 34px;
    margin-left: -50px;
  }
`

const Event = styled.div`
  ${'' /* border: 1px solid red; */}
  height: 150px;
  max-width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CirclePoint = styled.div`
  position: absolute;
  box-sizing: border-box;
  ${'' /* margin: 380% 0 0 0; */}
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.blue};

  .circles {
    &__second {
    box-sizing: border-box;
    width: 70%;
    height: 70%;
    border: 4px solid ${({ theme }) => theme.blue};
    margin: 15% auto;
    line-height: 100%;
    border-radius: 50%;
  }

  &__third {
    width: 60%;
    height: 60%;
    background-color: ${({ theme }) => theme.blue};
    margin: 20% auto;
    border-radius: 50%;
  }
}
`