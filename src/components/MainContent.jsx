import EmailIcon from '@mui/icons-material/Email'
import FaceIcon from '@mui/icons-material/Face'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SchoolIcon from '@mui/icons-material/School'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

function MainContent() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: 'background.default',
        py: 6,
      }}
    >
      <Container maxWidth="md">
        {/* Welcome Section */}
        <Paper sx={{ p: 4, mb: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
            Welcome to Kotaro MIZUMA's page!!
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 500, mb: 3 }}>
            水間 浩太郎 Kotaro MIZUMA
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <LinkedInIcon color="primary" />
            <Link href="https://www.linkedin.com/in/kotaro-mizuma-0644a8137/" target="_blank" rel="noopener">
              LinkedIn
            </Link>
          </Box>
          
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <EmailIcon fontSize="small" />
              <strong>Mail:</strong>
            </Typography>
            <Typography variant="body2" sx={{ ml: 4, display: 'flex', alignItems: 'center', gap: 1 }}>
              kotaro.mizuma19 [at] gmail.com (private<FaceIcon fontSize="small" color="action" />)
            </Typography>
            <Typography variant="body2" sx={{ ml: 4, display: 'flex', alignItems: 'center', gap: 1 }}>
              mizuma [at] sigmath.es.osaka-u.ac.jp (academic<SchoolIcon fontSize="small" color="action" />)
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ ml: 4, mt: 1, display: 'block', fontStyle: 'italic' }}>
              Note: [at] should be replaced with @ to avoid spam bots.
            </Typography>
          </Box>
        </Paper>

        {/* Affiliation Section */}
        <Paper sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', mb: 3 }}>
            Affiliation
          </Typography>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              Statistical & Quantitative Sciences
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Data and Quantitative Sciences, Research & Development
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Takeda Pharmaceutical Company Limited
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mt: 1 }}>
              <LocationOnIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                1-1, Doshomachi 4-chome, Chuo-ku, Osaka, Japan 540-8645
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
              The University of Osaka
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ph.D. Candidate @  
              <Link href="http://www.sigmath.es.osaka-u.ac.jp/Stat1/" target="_blank" rel="noopener">
                Uchida Laboratory
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Area of Mathematical and Statistical Finance
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Division of Mathematical Science for Social Systems
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Graduate School of Engineering Science
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The University of Osaka
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mt: 1 }}>
              <LocationOnIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                1-3 Machikaneyama-cho Toyonaka, Osaka, Japan 560-8531
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Research Theme Section */}
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', mb: 3 }}>
            Research Theme
          </Typography>
          
          <Box component="ol" sx={{ pl: 2 }}>
            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Computational algebraic statistics
              </Typography>
              <Box component="ol" sx={{ pl: 2, mt: 1 }}>
                <Typography component="li" variant="body2" color="text.secondary">
                  Tests based on contingency tables
                </Typography>
                <Typography component="li" variant="body2" color="text.secondary">
                  Survival analysis
                </Typography>
              </Box>
            </Box>

            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Bayesian analysis
              </Typography>
              <Box component="ol" sx={{ pl: 2, mt: 1 }}>
                <Typography component="li" variant="body2" color="text.secondary">
                  Bayesian nonparametrics
                </Typography>
                <Typography component="li" variant="body2" color="text.secondary">
                  Online learning
                </Typography>
              </Box>
            </Box>

            <Box component="li">
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Statistical causal inference
              </Typography>
              <Box component="ol" sx={{ pl: 2, mt: 1 }}>
                <Typography component="li" variant="body2" color="text.secondary">
                  Principal stratification
                </Typography>
                <Typography component="li" variant="body2" color="text.secondary">
                  Semiparametric inference
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default MainContent
