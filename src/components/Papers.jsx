import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

function Papers() {
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
        {/* Accepted Papers Section */}
        <Paper sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', mb: 3 }}>
            Accepted Papers
          </Typography>

          <Box component="ol" sx={{ pl: 2 }}>
            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>Mizuma, K., Hashimoto, T., Sakui, S., & Kuroda, S.</strong> (2024).
                Principal quantile treatment effect estimation using principal scores.{' '}
                <em>Statistics in Medicine</em>, 43(24), 4635-4649.{' '}
                <Link href="https://onlinelibrary.wiley.com/doi/10.1002/sim.10178" target="_blank" rel="noopener">
                  [link]
                </Link>
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                <Chip label="en" size="small" color="primary" sx={{ mb: 1 }} />
                <Chip label="estimand" size="small" variant="outlined" />
                <Chip label="monotonicity" size="small" variant="outlined" />
                <Chip label="non-normal" size="small" variant="outlined" />
                <Chip label="principal ignorability" size="small" variant="outlined" />
                <Chip label="principal stratification" size="small" variant="outlined" />
                <Chip label="principal stratum" size="small" variant="outlined" />
              </Box>
            </Box>

            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>水間 浩太郎, 杉本 知之.</strong> (2023).
                計算代数統計を用いたログランク検定. <em>日本統計学会誌</em>, 52(2), 355-371.{' '}
                <Link href="https://doi.org/10.11329/jjssj.52.355" target="_blank" rel="noopener">
                  [link]
                </Link>
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                <Chip label="ja" size="small" color="primary" sx={{ mb: 1 }} />
                <Chip label="生存時間解析" size="small" variant="outlined" />
                <Chip label="ログランク統計量" size="small" variant="outlined" />
                <Chip label="計算代数統計" size="small" variant="outlined" />
                <Chip label="正確検定" size="small" variant="outlined" />
                <Chip label="有意水準" size="small" variant="outlined" />
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* Working Papers Section */}
        <Paper sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', mb: 3 }}>
            Working Papers
          </Typography>

          <Typography variant="body2" color="text.secondary">
            ■
          </Typography>
        </Paper>

        {/* Patent Section */}
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', mb: 3 }}>
            Patent
          </Typography>

          <Box component="ol" sx={{ pl: 2 }}>
            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>WO2024143374</strong> - BUSINESS SUPPORT SYSTEM, BUSINESS SUPPORT METHOD, DATA MANAGEMENT PROGRAM, AND SEARCH PROGRAM.{' '}
                <Link href="https://patentscope2.wipo.int/search/en/detail.jsf?docId=WO2024143374" target="_blank" rel="noopener">
                  [link]
                </Link>
                <br />
                <strong>特開2025-168523</strong>.{' '}
                <Link href="https://www.j-platpat.inpit.go.jp/c1801/PU/JP-2025-168523/11/ja" target="_blank" rel="noopener">
                  [link]
                </Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default Papers
