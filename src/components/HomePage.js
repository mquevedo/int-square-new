// @flow
import React from 'react'
import styled from 'styled-components'

import {
  Header,
  Footer,
  BrandsSection,
  CompaniesSection,
} from './'

export const HomePage = () => {
  return (
    <HomePageStyles>
      <Header />
      <CompaniesSection />
      <BrandsSection />
      <Footer />
    </HomePageStyles>
  )
}

const HomePageStyles = styled.div`

`
