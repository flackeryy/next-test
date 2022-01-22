import { Box, Card, CardContent, Container, Typography } from '@mui/material'
import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import Api from 'services/Api'
import { getErrorMsg } from 'utils/api/errors'

import { PageNames } from '../../_document'

interface ActivateProps {
  error?: string
  success?: boolean
  token?: string
}

export default function Activate(props: ActivateProps) {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="sm" sx={{ py: '80px' }}>
        <Card>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              p: 4
            }}
          >
            <Typography>
              {props.error ? props.error : 'You account successfully activated'}
            </Typography>

            {!props.error && (
              <Link href={PageNames.MENUS} passHref>
                <Typography
                  sx={{ mt: 2 }}
                  color="textSecondary"
                  variant="body2"
                  style={{ cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Go to Menus
                </Typography>
              </Link>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    if (!(context.params?.uuid && context.params?.token)) {
      return {
        redirect: {
          destination: '/login',
          permanent: true
        }
      }
    }

    const response = await Api.server({
      method: 'POST',
      url: `/activate/${context.params.uuid}/${context.params.token}/`,
      headers: {
        cookie: context.req.headers.cookie || ''
      }
    })

    context.res.setHeader(
      'Set-Cookie',
      response.headers['set-cookie']?.[0] || ''
    )

    return {
      props: {
        success: true,
        token: response.data.data.access
      }
    }
  } catch (e: any) {
    console.log('ACTIVATE ERROR', {
      status: e.response.status,
      statusText: e.response.statusText
    })
    return {
      props: {
        error: getErrorMsg(e)
      }
    }
  }
}
