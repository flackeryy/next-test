import { yupResolver } from '@hookform/resolvers/yup'
import LoadingButton from '@mui/lab/LoadingButton'
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  Container,
  Divider,
  Grid,
  Link as MuiLink,
  TextField,
  Typography
} from '@mui/material'
import { logo } from 'assets/generalAssets'
import GoogleButton from 'components/buttons/GoogleButton'
import useReg from 'hooks/api/auth/useReg'
import t from 'locales/en/translations.json'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { getError } from 'utils/forms'
import * as yup from 'yup'

import { PageNames } from '../../../pages/_document'

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  full_name: yup.string().required(),
  phone_number: yup.string().required(),
  business_name: yup.string().required()
})

interface FormProps {
  onSuccess: () => void
  onGoogleSuccess: () => void
}

export default function Form({ onSuccess, onGoogleSuccess }: FormProps) {
  const { onReg, onRegGoogle, isRegLoading, isRegGoogleLoading } = useReg()

  const methods = useForm({
    defaultValues: {
      email: '',
      full_name: '',
      phone_number: '+852',
      password: '',
      business_name: ''
    },
    resolver: yupResolver(validationSchema)
  })

  const handleSubmit = (values: any) => {
    onReg(values, onSuccess)
  }

  const { errors } = methods.formState

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
                {t.common.sign_up}
              </Typography>
            </div>
          </Box>

          <GoogleButton
            onSuccess={(token, email) =>
              onRegGoogle(token, email, onGoogleSuccess)
            }
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

          <Box
            sx={{
              flexGrow: 1
            }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault()
                methods.handleSubmit(handleSubmit)()
              }}
            >
              <TextField
                fullWidth
                error={!!getError(errors, 'full_name')}
                helperText={getError(errors, 'full_name')}
                label={t.common.full_name}
                margin="normal"
                variant="outlined"
                {...methods.register('full_name')}
              />
              <TextField
                fullWidth
                error={!!getError(errors, 'email')}
                helperText={getError(errors, 'email')}
                label={t.common.email_address}
                margin="normal"
                variant="outlined"
                {...methods.register('email')}
              />
              <TextField
                fullWidth
                error={!!getError(errors, 'password')}
                helperText={getError(errors, 'password')}
                label={t.common.password}
                margin="normal"
                type="password"
                variant="outlined"
                {...methods.register('password')}
              />
              <TextField
                fullWidth
                error={!!getError(errors, 'phone_number')}
                helperText={getError(errors, 'phone_number')}
                label={t.common.phone_number}
                margin="normal"
                type="tel"
                variant="outlined"
                {...methods.register('phone_number')}
              />
              <TextField
                fullWidth
                error={!!getError(errors, 'business_name')}
                helperText={getError(errors, 'business_name')}
                label={t.common.business_name}
                margin="normal"
                variant="outlined"
                {...methods.register('business_name')}
              />
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  ml: -1,
                  mt: 2
                }}
              >
                <Checkbox
                  // checked={values.policy}
                  color="primary"
                  name="policy"
                  // onChange={handleChange}
                />
                <Typography color="textSecondary" variant="body2">
                  {t.common.read}{' '}
                  <MuiLink color="primary" component="a" href="#">
                    {t.common.t_and_c}
                  </MuiLink>
                </Typography>
              </Box>
              {/*{Boolean(touched.policy && errors.policy) && (*/}
              {/*  <FormHelperText error>{errors.policy}</FormHelperText>*/}
              {/*)}*/}
              {/*{errors.submit && (*/}
              {/*  <Box sx={{ mt: 3 }}>*/}
              {/*    <FormHelperText error>{errors.submit}</FormHelperText>*/}
              {/*  </Box>*/}
              {/*)}*/}
              <Box sx={{ mt: 2 }}>
                <LoadingButton
                  loading={isRegLoading || isRegGoogleLoading}
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  {t.common.create_account}
                </LoadingButton>
              </Box>
            </form>
          </Box>
          <Divider sx={{ my: 3 }} />
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
