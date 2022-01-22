import { Box, Typography } from '@mui/material'
import LiveHeader from 'components/orders/LiveHeader'
import OrderManager from 'components/orders/OrderManager'
import useAuth from 'hooks/api/auth/useAuth'
import authMiddleware from 'middlewares/authMiddleware'
import { orders } from 'models/Orders'
import { GetServerSidePropsContext } from 'next'
import * as React from 'react'
import { AuthProps } from 'utils/axios'

// TODO where do we mark the order as complete?
// TODO the orders should be sorted as most recent orders come in,
//  and when the status changes to complete the order should be pushed to the bottom.
export default function Live(props: AuthProps) {
  useAuth({ ...props })
  // eslint-disable-next-line no-constant-condition
  if (true) {
    return (
      <>
        <LiveHeader />

        <Box sx={{ p: 3 }}>
          <Typography>Coming Soon...</Typography>
        </Box>
      </>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <LiveHeader />
      <OrderManager ordersList={orders} />
    </div>
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
