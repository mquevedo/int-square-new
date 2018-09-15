import React from 'react'
import { ThemeProvider } from 'styled-components'

import './App.css'
import theme from './theme'
import { HomePage } from './components/'


class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <HomePage />
        </div>
      </ThemeProvider>
    )
  }
}

export default App
