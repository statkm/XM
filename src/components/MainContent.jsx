import LocationOnIcon from '@mui/icons-material/LocationOn'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

function MainContent() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: '#f5f5f5',
        p: 3,
        mt: 8,
        ml: { sm: 0 },
        overflow: 'auto',
      }}
    >
      <Grid container spacing={3}>
        {/* Charts Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Grid container spacing={2} justifyContent="center">
              {[1, 2, 3, 4].map((item) => (
                <Grid item xs={12} sm={6} md={3} key={item}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 200,
                    }}
                  >
                    <svg width="120" height="120" viewBox="0 0 120 120">
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="#e0e0e0"
                        strokeWidth="10"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="#00bcd4"
                        strokeWidth="10"
                        strokeDasharray="251.2 314"
                        strokeDashoffset="0"
                        transform="rotate(-90 60 60)"
                      />
                      <text
                        x="60"
                        y="60"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="24"
                        fill="#888"
                      >
                        82%
                      </text>
                    </svg>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Graphs Section */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, height: 400 }}>
            <Typography variant="h6" gutterBottom>
              Statistics
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                height: '80%',
                justifyContent: 'space-around',
              }}
            >
              {[1, 2].map((item) => (
                <Box
                  key={item}
                  sx={{
                    height: '45%',
                    bgcolor: '#f5f5f5',
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Graph {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Cards Section */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            {/* Updates Card */}
            <Grid item xs={12}>
              <Card>
                <Box sx={{ bgcolor: '#26a69a', color: 'white', p: 2 }}>
                  <Typography variant="h6">Updates</Typography>
                </Box>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Non dolore elit adipisicing ea reprehenderit consectetur culpa.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Read More</Button>
                </CardActions>
              </Card>
            </Grid>

            {/* Options Card */}
            <Grid item xs={12}>
              <Card sx={{ bgcolor: '#673ab7', color: 'white' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    View options
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    <FormControlLabel
                      control={<Checkbox sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
                      label="Click per object"
                      sx={{ color: 'white' }}
                    />
                    <FormControlLabel
                      control={<Checkbox sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
                      label="Views per object"
                      sx={{ color: 'white' }}
                    />
                    <FormControlLabel
                      control={<Checkbox sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
                      label="Objects selected"
                      sx={{ color: 'white' }}
                    />
                    <FormControlLabel
                      control={<Checkbox sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
                      label="Objects viewed"
                      sx={{ color: 'white' }}
                    />
                  </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between' }}>
                  <Button size="small" sx={{ color: 'white' }}>
                    Change location
                  </Button>
                  <LocationOnIcon />
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MainContent
