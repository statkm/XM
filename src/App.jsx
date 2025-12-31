import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useMemo, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities'
import Drawer from './components/Drawer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Papers from './components/Papers'

function App() {
  const [mode, setMode] = useState(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDarkMode ? 'dark' : 'light'
  })

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                primary: {
                  main: '#616161',
                },
                background: {
                  default: '#f5f5f5',
                  paper: '#ffffff',
                },
              }
            : {
                primary: {
                  main: '#9e9e9e',
                },
                background: {
                  default: '#000000',
                  paper: '#1a1a1a',
                },
              }),
        },
      }),
    [mode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Drawer />
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            <Header mode={mode} toggleColorMode={toggleColorMode} />
            <Routes>
              <Route path="/" element={<Navigate to="/home/" replace />} />
              <Route path="/home" element={<MainContent />} />
              <Route path="/home/" element={<MainContent />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/biography" element={<Box sx={{ p: 4 }}>Biography Page</Box>} />
              <Route path="/papers" element={<Papers />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
