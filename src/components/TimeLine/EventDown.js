import React, { Component } from 'react'
import styled from 'styled-components'

export class EventDown extends Component {
  render() {
    const { title, text } = this.props;
    return (
      <Event>
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

const Content = styled.div`
  ${'' /* position: absolute; */}
  overflow: hidden;
  padding: 5px;
  margin: 0 5px 0 5px;
  padding-top: 300px;
  max-width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.blue};
  ${'' /* border: 1px solid red; */}
`

const Title = styled.div`
  position: absolute;
  margin-top: -60px;
`
const ArrowDown = styled.div`
  height: 60px;
  margin-top: 65px;
  border: 1px solid ${({ theme }) => theme.blue};
  position: absolute;
  .circle {
    top: 60px;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.blue};
    position: absolute;
    margin: -1px 0 0 -5px;
  }
`

const Event = styled.div`
  ${'' /* border: 1px solid red; */}
  height: 100%;
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Line = styled.div`
  border: 1px solid ${({ theme }) => theme.blue};
  width: 80%;
  position: absolute;
`

const Container = styled.div`
  border: 1px solid black;
  margin: 0 auto;
  width: 80%;
  height: 100%;
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