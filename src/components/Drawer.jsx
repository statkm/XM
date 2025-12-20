import AddIcon from '@mui/icons-material/Add'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import DeleteIcon from '@mui/icons-material/Delete'
import FlagIcon from '@mui/icons-material/Flag'
import ForumIcon from '@mui/icons-material/Forum'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import HomeIcon from '@mui/icons-material/Home'
import InboxIcon from '@mui/icons-material/Inbox'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import PeopleIcon from '@mui/icons-material/People'
import ReportIcon from '@mui/icons-material/Report'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

const drawerWidth = 240

const menuItems = [
  { text: 'Home', icon: <HomeIcon /> },
  { text: 'Inbox', icon: <InboxIcon /> },
  { text: 'Trash', icon: <DeleteIcon /> },
  { text: 'Spam', icon: <ReportIcon /> },
  { text: 'Forums', icon: <ForumIcon /> },
  { text: 'Updates', icon: <FlagIcon /> },
  { text: 'Promos', icon: <LocalOfferIcon /> },
  { text: 'Purchases', icon: <ShoppingCartIcon /> },
  { text: 'Social', icon: <PeopleIcon /> },
]

function Drawer({ open, toggleDrawer }) {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleAccountMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleAccountMenuClose = () => {
    setAnchorEl(null)
  }

  const drawerContent = (
    <Box sx={{ overflow: 'auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          p: 2,
          backgroundColor: '#263238',
          color: '#eceff1',
          minHeight: 151,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <Avatar
          src="/images/user.jpg"
          alt="User"
          sx={{ width: 48, height: 48, mb: 1 }}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <Typography variant="body2" sx={{ flexGrow: 1 }}>
            kmizuma0215@gmal.com
          </Typography>
          <IconButton
            size="small"
            onClick={handleAccountMenuOpen}
            sx={{ color: 'inherit' }}
          >
            <ArrowDropDownIcon />
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleAccountMenuClose}
        >
          <MenuItem onClick={handleAccountMenuClose}>
            kmizuma0215@gmal.com
          </MenuItem>
          <MenuItem onClick={handleAccountMenuClose}>
            info@example.com
          </MenuItem>
          <MenuItem onClick={handleAccountMenuClose}>
            <AddIcon sx={{ mr: 1 }} fontSize="small" />
            Add another account...
          </MenuItem>
        </Menu>
      </Box>
      
      <List
        sx={{
          backgroundColor: '#37474f',
          color: 'rgba(255, 255, 255, 0.56)',
          flexGrow: 1,
          py: 0,
        }}
      >
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{
                '&:hover': {
                  backgroundColor: '#00bcd4',
                  color: '#37474f',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <Box sx={{ flexGrow: 1 }} />
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              '&:hover': {
                backgroundColor: '#00bcd4',
                color: '#37474f',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
              <HelpOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Help" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <>
      {/* Desktop drawer */}
      <MuiDrawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            border: 'none',
          },
        }}
      >
        <Box sx={{ height: 64 }} /> {/* Spacer for AppBar */}
        {drawerContent}
      </MuiDrawer>

      {/* Mobile drawer */}
      <MuiDrawer
        variant="temporary"
        open={open}
        onClose={toggleDrawer}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            border: 'none',
          },
        }}
      >
        <Box sx={{ height: 64 }} /> {/* Spacer for AppBar */}
        {drawerContent}
      </MuiDrawer>
    </>
  )
}

export default Drawer
