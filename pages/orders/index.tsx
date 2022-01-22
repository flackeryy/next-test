import { Box, Typography } from '@mui/material'
import Header from 'components/Header'
import Layout from 'components/layout'
import AllOrdersList from 'components/orders/AllOrdersList'
import useAuth from 'hooks/api/auth/useAuth'
import authMiddleware from 'middlewares/authMiddleware'
import { GetServerSidePropsContext } from 'next'
import { AuthProps } from 'utils/axios'

export default function Orders(props: AuthProps) {
  useAuth({ ...props })
  // eslint-disable-next-line no-constant-condition
  if (true) {
    return (
      <Layout>
        <Header name={'Orders'} />

        <Box sx={{ p: 3 }}>
          <Typography>Coming Soon...</Typography>
        </Box>
      </Layout>
    )
  }

  return (
    <Layout>
      <Header name={'Orders'} />
      <Box sx={{ p: 3 }}>
        <AllOrdersList />
      </Box>
    </Layout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return authMiddleware(context, async (token, me) => {
    return {
      props: {
        token,
        me
      }
    }
  })
}
