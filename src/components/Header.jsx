import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { useLocation } from 'react-router-dom'

function Header({ mode, toggleColorMode }) {
  const theme = useTheme()
  const location = useLocation()

  const getTitle = () => {
    switch (location.pathname) {
      case '/activities':
        return 'Kotaro MIZUMA - Activities -'
      case '/papers':
        return 'Kotaro MIZUMA - Papers -'
      default:
        return 'Kotaro MIZUMA'
    }
  }

  return (
    <AppBar
      position="static"
      elevation={1}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 600,
              py: 1,
            }}
          >
            {getTitle()}
          </Typography>
          <IconButton onClick={toggleColorMode} color="inherit">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
