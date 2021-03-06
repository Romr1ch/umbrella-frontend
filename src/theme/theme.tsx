import React from 'react'
import { CssBaseline, ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material'
import { palette } from './palette'
import { typography } from './typography'
import { components } from './components'

const theme = createTheme({
  shape: { borderRadius: 8 },
  palette,
  typography,
})

theme.components = components(theme)

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
