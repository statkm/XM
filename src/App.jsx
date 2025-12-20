import Box from '@mui/material/Box'
import { useState } from 'react'
import Drawer from './components/Drawer'
import Header from './components/Header'
import MainContent from './components/MainContent'

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Header toggleDrawer={toggleDrawer} />
      <Drawer open={drawerOpen} toggleDrawer={toggleDrawer} />
      <MainContent />
    </Box>
  )
}

export default App
