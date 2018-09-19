import React, { Component } from 'react'
import styled from 'styled-components'

export class EventRight extends Component {
  render() {
    const { text, title } = this.props;
    return (
      <Event>
        <Line />
        <Content>
          {text}
        </Content>
        <ArrowUp>
          <div className='circle' />
        </ArrowUp>
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
  margin: 0 5px 0 5px;
  max-width: 25%;
  border-bottom: 2px solid ${({ theme }) => theme.blue};
   @media(max-width: ${({ theme }) => theme.medium.end}) {
    margin-left: 275px;
    font-size: 0.75em;
  }
  @media(max-width: ${({ theme }) => theme.medium.start}) {
    margin-left: 0px;
    right: 10px;
  }
`

const Title = styled.div`
  position: absolute;
  margin-left: -100px;
`
const ArrowUp = styled.div`
  width: 60px;
  margin-left: 65px;
  border: 1px solid ${({ theme }) => theme.blue};
  position: absolute;
  .circle {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.blue};
    position: absolute;
    margin: -4px 0 0 55px;
  }

   @media(max-width: ${({ theme }) => theme.medium.start}) {
    width: 34px;
    margin-left: 50px;

    .circle {
      margin: -4px 0 0 25px;
    }
  }
`

const Event = styled.div`
  ${'' /* border: 1px solid red; */}
  height: 150px;
  max-width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
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