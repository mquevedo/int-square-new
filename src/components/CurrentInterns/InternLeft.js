import React, { Component } from 'react'
import styled from 'styled-components';

export class InternLeft extends Component {
  render() {
    const { bgImage, title, text } = this.props;
    return (
      <Container
        bgImage={bgImage} 
        className='container'>
        <div className='container__avatar' />
        <div className='container__content'>
          <p className='container__content__title'>
            {title}
          </p>
          <p className='container__content__text'>
            {text}
          </p>
        </div>
      </Container>
    )
  }
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.blue };
  margin: 0 auto;
  margin-bottom: 30px;
  width: 90%;
  height: 100px;
  border-radius: 10px;
  .container {
    &__avatar {
      position: absolute;
      width: 140px;
      height: 120px;
      margin-top: -10px;
      background-image: ${(props) => `url(/images/${props.bgImage})`};
      background-repeat: no-repeat;
      background-size: contain;
    }
    &__content {
      p {
        text-align: left;
      }
      padding: 5px 0 0 170px;
      &__title {
        font-weight: 600;
        color: #FFF;
        margin: 10px 0 5px 0;
        font-size: 0.9em;
      }
      &__text {
        color: #FFF;
        margin: 10px 0 0 0;
        font-size: 0.8em;
      }
    }
  }
`