import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { reg, regFinish, regGoogle } from 'services/api/auth'
import { getErrorMsg } from 'utils/api/errors'

import { setAuth } from './useAuth'

type OnReg = (values: any, onSuccess?: any) => void
type OnRegGoogle = (token: string, email: string, onSuccess?: any) => void
type OnRegFinish = (values: any, onSuccess?: any) => void

interface UseReg {
  onReg: OnReg
  onRegGoogle: OnRegGoogle
  onRegFinish: OnRegFinish
  isRegLoading: boolean
  isRegGoogleLoading: boolean
  isRegFinishLoading: boolean
}

export default function useReg(): UseReg {
  const [isRegLoading, setRegLoading] = useState(false)
  const [isRegGoogleLoading, setRegGoogleLoading] = useState(false)
  const [isRegFinishLoading, setRegFinishLoading] = useState(false)

  const onReg: OnReg = async (values, onSuccess) => {
    try {
      setRegLoading(true)
      await reg(values)
      setRegLoading(false)
      onSuccess?.()
    } catch (e) {
      setRegLoading(false)
      console.error(e)
      toast.error(getErrorMsg(e))
    }
  }

  const onRegGoogle: OnRegGoogle = async (token, email, onSuccess) => {
    try {
      setRegGoogleLoading(true)
      const response = await regGoogle(token, email)
      setAuth(response.access)
      setRegGoogleLoading(false)
      onSuccess?.()
    } catch (e) {
      setRegGoogleLoading(false)
      console.error(e)
      toast.error(getErrorMsg(e))
    }
  }

  const onRegFinish: OnRegFinish = async (values, onSuccess) => {
    try {
      setRegFinishLoading(true)
      await regFinish(values)

      setTimeout(() => {
        setRegFinishLoading(false)
        onSuccess?.()
      }, 1000)
    } catch (e) {
      setRegFinishLoading(false)
      console.error(e)
      toast.error(getErrorMsg(e))
    }
  }

  return {
    onReg,
    onRegFinish,
    onRegGoogle,
    isRegLoading,
    isRegFinishLoading,
    isRegGoogleLoading
  }
}
