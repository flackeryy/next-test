import { Box } from '@mui/material'
import Form from 'components/registrer/Form'
import GoogleForm from 'components/registrer/GoogleForm'
import SuccessMessage from 'components/registrer/SuccessMessage'
import gtm from 'lib/gtm'
import { useEffect, useState } from 'react'
import { useSWRConfig } from 'swr'

const Register = () => {
  const swrConfig: any = useSWRConfig()

  const [isSuccess, setSuccess] = useState(false)
  const [googleSuccess, setGoogleSuccess] = useState(false)

  useEffect(() => gtm.push({ event: 'page_view' }), [])

  useEffect(() => {
    swrConfig.cache?.clear?.()
  }, [])

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      {isSuccess ? (
        <SuccessMessage />
      ) : googleSuccess ? (
        <GoogleForm />
      ) : (
        <Form
          onSuccess={() => setSuccess(true)}
          onGoogleSuccess={() => setGoogleSuccess(true)}
        />
      )}
    </Box>
  )
}

export default Register
