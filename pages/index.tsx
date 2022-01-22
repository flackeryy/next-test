import { Box, Typography } from '@mui/material'
import Header from 'components/Header'
import Layout from 'components/layout'
import QuickStats from 'components/stats/QuickStats'
import WidgetPreviewer from 'components/stats/WidgetPreviewer'
import useAuth from 'hooks/api/auth/useAuth'
import gtm from 'lib/gtm'
import t from 'locales/en/translations.json'
import authMiddleware from 'middlewares/authMiddleware'
import { GetServerSidePropsContext } from 'next'
import { useEffect } from 'react'
import { AuthProps } from 'utils/axios'

export default function Dashboard(props: AuthProps) {
  useAuth({ ...props })

  useEffect(() => gtm.push({ event: 'page_view' }), [])

  // eslint-disable-next-line no-constant-condition
  if (true) {
    return (
      <Layout>
        <Header name={'Dashboard'} />

        <Box sx={{ p: 3 }}>
          <Typography>Coming Soon...</Typography>
        </Box>
      </Layout>
    )
  }

  return (
    <Layout>
      <Header name={'Dashboard'} />
      <Box sx={{ p: 3 }}>
        <WidgetPreviewer
          name={t.common.overview_for}
          element={<QuickStats />}
        />
      </Box>
    </Layout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return authMiddleware<AuthProps>(context, async (token, me) => {
    return {
      props: {
        token,
        me
      }
    }
  })
}
