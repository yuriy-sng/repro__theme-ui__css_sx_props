// basic usage
import React from 'react'
import { ThemeProvider as ThemeUIProvider } from 'theme-ui'
import { theme } from './theme'

export const ThemeProvider = ({ children}: { children: React.ReactNode }) => (
  <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>
)
