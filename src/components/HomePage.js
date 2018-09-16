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
  BrandsSection,
  CompaniesSection,
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
      <CompaniesSection />
      <BrandsSection />
      <Footer />
    </HomePageStyles>
  )
}

const HomePageStyles = styled.div`

`
