import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { UPDATED_AT } from '../config'

function Footer() {
  return (
    <Box component="footer" sx={{ py: 2, mt: 'auto', bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="caption" color="text.secondary">
          Last updated: {UPDATED_AT}
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
