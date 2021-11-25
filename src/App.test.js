import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders homepage', () => {
  render(<App />)
  const linkElement = screen.getByText(/The Int2 project focuses on sending young professionals from El Salvador to companies abroad/i)
  expect(linkElement).toBeInTheDocument()
})
