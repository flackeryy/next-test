import { Card, CardContent, Container, Typography } from '@mui/material'
import t from 'locales/en/translations.json'
import Link from 'next/link'
import React from 'react'

import { PageNames } from '../../../pages/_document'

export default function SuccessMessage() {
  return (
    <Container maxWidth="sm" sx={{ py: '80px' }}>
      <Card>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 4
          }}
        >
          <Typography color="textPrimary" gutterBottom variant="h4">
            Check your email
          </Typography>

          <Typography sx={{ my: 4 }}>
            To confirm your email address, follow the link we sent to you.
          </Typography>

          <Link href={PageNames.LOGIN} passHref>
            <Typography
              color="textSecondary"
              variant="body2"
              style={{ cursor: 'pointer', textDecoration: 'underline' }}
            >
              {t.common.login_cta}
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </Container>
  )
}
