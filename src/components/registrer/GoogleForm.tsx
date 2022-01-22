import { yupResolver } from '@hookform/resolvers/yup'
import LoadingButton from '@mui/lab/LoadingButton'
import {
  Box,
  Card,
  CardContent,
  Container,
  TextField,
  Typography
} from '@mui/material'
import useReg from 'hooks/api/auth/useReg'
import t from 'locales/en/translations.json'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { getError } from 'utils/forms'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  phone_number: yup.string().required(),
  business_name: yup.string().required()
})

export default function GoogleForm() {
  const router = useRouter()
  const { onRegFinish, isRegFinishLoading } = useReg()

  const methods = useForm({
    defaultValues: {
      email: '',
      full_name: '',
      phone_number: '',
      password: '',
      business_name: ''
    },
    resolver: yupResolver(validationSchema)
  })

  const handleSubmit = (values: any) => {
    onRegFinish(values, () => {
      router.push('/menus')
    })
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
                {t.common.sign_up_almost}
              </Typography>
            </div>
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
                error={!!getError(errors, 'phone_number')}
                helperText={getError(errors, 'phone_number')}
                label={t.common.phone_number}
                margin="normal"
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

              <Box sx={{ mt: 2 }}>
                <LoadingButton
                  loading={isRegFinishLoading}
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
        </CardContent>
      </Card>
    </Container>
  )
}
