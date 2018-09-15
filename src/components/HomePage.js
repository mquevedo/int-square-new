// @flow
import React from 'react'
import styled from 'styled-components'

import {
  Header,
  Footer,
  CompaniesSection,
} from './'

export const HomePage = () => {
  return (
    <HomePageStyles>
      <Header />
      <CompaniesSection />
      <Footer />
    </HomePageStyles>
  )
}

const HomePageStyles = styled.div`

`
