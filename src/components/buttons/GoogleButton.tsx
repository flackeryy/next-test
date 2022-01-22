import { Button, Typography } from '@mui/material'
import { google } from 'assets/generalAssets'
import t from 'locales/en/translations.json'
import Image from 'next/image'
import React from 'react'
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login'

import { GOOGLE_KEY } from '../../config'

interface GoogleButtonProps {
  onSuccess: (token: string, email: string) => void
}

export default function GoogleButton({ onSuccess }: GoogleButtonProps) {
  const handleGoogleSuccess = (res: GoogleLoginResponse) => {
    onSuccess(res.accessToken, res.profileObj.email)
  }

  const handleGoogleFailure = (e: any) => {
    console.error(e)
  }

  return (
    <GoogleLogin
      clientId={GOOGLE_KEY as string}
      onSuccess={handleGoogleSuccess as any}
      onFailure={handleGoogleFailure}
      cookiePolicy={'single_host_origin'}
      render={(props) => (
        <Button
          fullWidth
          size="large"
          sx={{
            backgroundColor: 'common.white',
            color: 'common.black',
            '&:hover': {
              backgroundColor: 'common.white',
              color: 'common.black'
            }
          }}
          variant="contained"
          onClick={props.onClick}
          disabled={props.disabled}
        >
          <Image alt="Google" src={google} />
          <Typography style={{ paddingLeft: 4 }}>{t.common.google}</Typography>
        </Button>
      )}
    />
  )
}
