import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { token, tokenGoogle } from 'services/api/auth'
import { getErrorMsg } from 'utils/api/errors'

import { setAuth } from './useAuth'

type OnLogin = (data: any) => void
type OnLoginGoogle = (token: string, email: string) => void

interface UseLogin {
  onLogin: OnLogin
  onLoginGoogle: OnLoginGoogle
  isLoading: boolean
  isGoogleLoading: boolean
}

export default function useLogin(): UseLogin {
  const [isLoading, setLoading] = useState(false)
  const [isGoogleLoading, setGoogleLoading] = useState(false)

  const router = useRouter()

  const onLogin: OnLogin = async (data) => {
    try {
      setLoading(true)

      const response = await token(data)
      setAuth(response.access)

      setLoading(false)
      router.push('/menus')
    } catch (e) {
      setLoading(false)
      toast.error(getErrorMsg(e))
      console.error(e)
    }
  }

  const onLoginGoogle: OnLoginGoogle = async (token, email) => {
    try {
      setGoogleLoading(true)

      const response = await tokenGoogle(token, email)
      setAuth(response.access)

      setGoogleLoading(false)
      router.push('/')
    } catch (e: any) {
      setGoogleLoading(false)
      console.log(getErrorMsg(e), e.response.status)
      toast.error(getErrorMsg(e))
      console.error(e)
    }
  }

  return {
    onLogin,
    onLoginGoogle,
    isLoading,
    isGoogleLoading
  }
}
