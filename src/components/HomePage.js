// @flow
import React from 'react'
import styled from 'styled-components'

import {
  HomePageHeader,
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
      <HomePageHeader />
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
