// @flow
import React from 'react'
import styled from 'styled-components'

import {
  Header,
  Timeline,
  Alumni,
  Current,
  Life,
  Partners,
  ComingBack,
  ApplyNow,
  Footer,
  Brands,
} from './'

export const HomePage = () => {
  return (
    <HomePageStyles>
      <Header />
      <Timeline/>
      <Alumni/>  
      <Current/>
      <Life/>
      <Partners/>
      <ComingBack/>
      <ApplyNow/>
      <Brands />
      <Footer />
    </HomePageStyles>
  )
}

const HomePageStyles = styled.div`

`
