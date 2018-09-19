// @flow
import React from 'react'
import styled from 'styled-components'

import {
  HomePageHeader,
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
