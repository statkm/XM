import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

function Activities() {
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
        {/* International Conferences Section */}
        <Paper sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', mb: 3 }}>
            International Conferences
          </Typography>

          <Box component="ol" sx={{ pl: 2 }}>
            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>Kotaro Mizuma, Takamasa Hashimoto, Sho Sakui, Shingo Kuroda</strong> (2025.8).
                Estimation method of principal quantile treatment effect using principal scores and its application.{' '}
                <Link href="https://ww2.amstat.org/meetings/jsm/2025/index.cfm" target="_blank" rel="noopener">
                  2025 Joint Statistical Meetings (JSM2025)
                </Link>.
              </Typography>
            </Box>

            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>Kotaro Mizuma, Kosuke Morikawa</strong> (2025.8).
                Head-to-head Comparison Using Data Integration of Summary Data via Generalized Entropy Balancing.{' '}
                <Link href="https://ww2.amstat.org/meetings/jsm/2025/index.cfm" target="_blank" rel="noopener">
                  2025 Joint Statistical Meetings (JSM2025)
                </Link>.
              </Typography>
            </Box>

            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>Kotaro Mizuma, Tomoyuki Sugimoto</strong> (2019.9).
                Log-rank Test and Its Handicap Procedure Using Computational Algebraic Statistics.{' '}
                <Link href="https://www2.aeplan.co.jp/isbs2019/index.html" target="_blank" rel="noopener">
                  the 6th International Symposium on Biopharmaceutical Statistics (ISBS2019)
                </Link>.
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Domestic Conferences Section */}
        <Paper sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', mb: 3 }}>
            Domestic Conferences
          </Typography>

          <Box component="ol" sx={{ pl: 2 }}>
            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>黒田 晋吾、橋本 隆正、作井 将、水間 浩太郎</strong> (2025.5).
                Sensitivity analysis for principal ignorability assumption in principal quantile treatment effect estimation.{' '}
                <Link href="https://biometrics.ywstat.jp/2025/programme2025_08MAY2025.pdf" target="_blank" rel="noopener">
                  [link]
                </Link>{' '}
                <Link href="https://biometrics.ywstat.jp/2025/" target="_blank" rel="noopener">
                  2025年度日本計量生物学会年会
                </Link>.
              </Typography>
            </Box>

            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>作井 将、橋本 隆正、黒田 晋吾、水間 浩太郎</strong> (2025.2).
                主要層スコアによる分位点因果効果の推定方法とその臨床試験データへの適用事例.{' '}
                <Link href="https://pub.confit.atlas.jp/ja/event/jsctr16/presentation/P-130" target="_blank" rel="noopener">
                  [link]
                </Link>{' '}
                <Link href="https://pub.confit.atlas.jp/ja/event/jsctr16" target="_blank" rel="noopener">
                  第16回 日本臨床試験学会学術集会総会
                </Link>.
              </Typography>
            </Box>

            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>水間浩太郎, 杉本知之</strong> (2024.3).
                計算代数統計を利用したログランク検定.{' '}
                <Link href="https://jss2024spring.ywstat.jp/" target="_blank" rel="noopener">
                  第18回日本統計学会春季集会
                </Link>. (invited)
              </Typography>
            </Box>

            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>Kotaro Mizuma, Takamasa Hashimoto, Sho Sakui, Shingo Kuroda</strong> (2023.9).
                Principal quantile treatment effect estimation using principal scores.{' '}
                <Link href="https://confit.atlas.jp/guide/event/jfssa2023/subject/2APM1-01/category?cryptoId=" target="_blank" rel="noopener">
                  [link]
                </Link>{' '}
                <Link href="https://confit.atlas.jp/guide/event/jfssa2023/top" target="_blank" rel="noopener">
                  2023年度統計関連学会連合大会
                </Link>.
              </Typography>
            </Box>

            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>水間浩太郎, 濵田悦生</strong> (2018.9).
                オンライン学習におけるディリクレ過程.{' '}
                <Link href="http://www.jfssa.jp/taikai/2018/table/program_detail/pdf/201-250/J10245.pdf" target="_blank" rel="noopener">
                  [pdf]
                </Link>{' '}
                <Link href="http://www.jfssa.jp/taikai/2018/index.html" target="_blank" rel="noopener">
                  2018年度統計関連学会連合大会
                </Link>.
              </Typography>
            </Box>

            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>水間浩太郎, 杉本知之</strong> (2018.3).
                計算代数統計を利用した生存時間解析.{' '}
                <Link href="http://www.jss.gr.jp/convention/spring12/" target="_blank" rel="noopener">
                  第12回日本統計学会春季集会(東京)
                </Link>. 学生優秀発表賞受賞.
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Talks Section */}
        <Paper sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', mb: 3 }}>
            Talks
          </Typography>

          <Box component="ol" sx={{ pl: 2 }}>
            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>水間浩太郎</strong> (2025.11).
                ICH-E9(R1) Estimandの概念と臨床試験における適用事例.{' '}
                <Link href="https://www.med.osaka-u.ac.jp/pub/biostat/archives/category/seminar" target="_blank" rel="noopener">
                  大阪医学統計学セミナー
                </Link> (大阪).
              </Typography>
            </Box>

            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>橋本隆正, 舟尾暢男, 水間浩太郎</strong> (2025.9).
                Wilcoxon-Mann-Whitney（WMW）検定の問題点とBrunner Munzel検定への展望：SASを用いたBrunner Munzel検定の実装.{' '}
                <Link href="https://sas-user2025.ywstat.jp/" target="_blank" rel="noopener">
                  SASユーザー総会2025
                </Link> (東京). 優秀論文賞受賞.
              </Typography>
            </Box>

            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>水間浩太郎</strong> (2025.1).
                Rshinyによる簡単アプリ作成入門.{' '}
                <Link href="https://drive.google.com/file/d/1kM66MGj9qFUVpQO6QVmbUsGmEC2dWQtg/view" target="_blank" rel="noopener">
                  第5回ナニワデータサイエンス研究会
                </Link> (大阪).
              </Typography>
            </Box>

            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>Kotaro Mizuma, Takamasa Hashimoto, Sho Sakui, Shingo Kuroda</strong> (2022.12).
                Principal quantile treatment effect estimation using principal scores.{' '}
                <Link href="http://kdss.org/wp/wp-content/uploads/2022/11/KDSS3rd_symposium.pdf" target="_blank" rel="noopener">
                  第3回 かごしまデータ科学シンポジウム in OSAKA
                </Link> (大阪).
              </Typography>
            </Box>

            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>水間浩太郎, 杉本知之</strong> (2018.9).
                計算代数統計を利用した一般化ログランク検定. 医学統計研究会 秋季セミナー鹿児島2018 (鹿児島).
              </Typography>
            </Box>

            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>水間浩太郎, 濵田悦生</strong> (2018.8).
                ディリクレ過程を利用した高速アルゴリズム.{' '}
                <Link href="http://www.jams.or.jp/kaiho/kaiho-107.pdf" target="_blank" rel="noopener">
                  国際数理科学協会 2018 年度年会
                </Link> (大阪).
              </Typography>
            </Box>

            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>水間浩太郎, 杉本知之</strong> (2018.8).
                計算代数統計における効率的なマルコフ基底.{' '}
                <Link href="https://www.rs.tus.ac.jp/shinya_sugawara/ysg2018/" target="_blank" rel="noopener">
                  統計サマーセミナー2018
                </Link> (岐阜).
              </Typography>
            </Box>

            <Box component="li" sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>水間浩太郎, 杉本知之</strong> (2017.9).
                MCMCによるMantel-Haenszel正確検定. 医学統計研究会 秋季セミナー鹿児島2017 (鹿児島).
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Others Section */}
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', mb: 3 }}>
            Others
          </Typography>

          <Typography variant="body2">
            ■ 座長. 「医学統計（１）」{' '}
            <Link href="https://confit.atlas.jp/guide/event/jfssa2023/top" target="_blank" rel="noopener">
              2023年度統計関連学会連合大会
            </Link>.
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
}

export default Activities
