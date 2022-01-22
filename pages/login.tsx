import { yupResolver } from '@hookform/resolvers/yup'
import LoadingButton from '@mui/lab/LoadingButton'
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  TextField,
  Typography
} from '@mui/material'
import { logo } from 'assets/generalAssets'
import GoogleButton from 'components/buttons/GoogleButton'
import useLogin from 'hooks/api/auth/useLogin'
import gtm from 'lib/gtm'
import t from 'locales/en/translations.json'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSWRConfig } from 'swr'
import { getError } from 'utils/forms'
import * as yup from 'yup'

import { PageNames } from './_document'

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required()
})

const Login = () => {
  const swrConfig: any = useSWRConfig()

  const methods = useForm({
    resolver: yupResolver(validationSchema)
  })
  const { onLogin, onLoginGoogle, isGoogleLoading, isLoading } = useLogin()

  useEffect(() => {
    swrConfig.cache?.clear?.()
  }, [])

  const handleSubmit = (values: any) => {
    onLogin(values)
  }

  useEffect(() => gtm.push({ event: 'page_view' }), [])

  const { errors } = methods.formState

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
            <Grid
              container
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Image
                priority
                src={logo}
                alt="logo"
                height={18 * 2}
                width={90 * 2}
              />
            </Grid>

            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                mb: 2
              }}
            >
              <div>
                <Typography color="textPrimary" gutterBottom variant="h4">
                  {t.common.login}
                </Typography>
              </div>
            </Box>

            <GoogleButton
              onSuccess={(token, email) => onLoginGoogle(token, email)}
            />

            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                mt: 2
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Divider orientation="horizontal" />
              </Box>
              <Typography color="textSecondary" sx={{ m: 2 }} variant="body1">
                {t.common.or}
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Divider orientation="horizontal" />
              </Box>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
              <form onSubmit={methods.handleSubmit(handleSubmit)}>
                <TextField
                  helperText={getError(errors, 'email')}
                  error={!!getError(errors, 'email')}
                  fullWidth
                  label={t.common.email_address}
                  margin="normal"
                  type="email"
                  variant="outlined"
                  {...methods.register('email')}
                />
                <TextField
                  helperText={getError(errors, 'password')}
                  error={!!getError(errors, 'password')}
                  fullWidth
                  label={t.common.password}
                  margin="normal"
                  type="password"
                  variant="outlined"
                  {...methods.register('password')}
                />

                <Box sx={{ mt: 2 }}>
                  <LoadingButton
                    loading={isLoading || isGoogleLoading}
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    {t.common.login}
                  </LoadingButton>
                </Box>
              </form>
            </Box>
            <Divider sx={{ my: 3 }} />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <Link href={PageNames.REGISTER} passHref>
                <Typography
                  color="textSecondary"
                  variant="body2"
                  style={{ cursor: 'pointer', textDecoration: 'underline' }}
                >
                  {t.common.register_cta}
                </Typography>
              </Link>
              <Link href={PageNames.RESET} passHref>
                {/* TODO create route here */}
                <Typography
                  color="textSecondary"
                  variant="body2"
                  style={{ cursor: 'pointer', textDecoration: 'underline' }}
                >
                  {t.common.forgot_password}
                </Typography>
              </Link>
            </div>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default Login
