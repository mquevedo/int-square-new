import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { HomePage, Header } from './components/'


class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <HomePage />
        </div>
      </ThemeProvider>
    )
  }
}

export default App
