import { fetcher } from 'services/api/common'
import useSWR from 'swr'

export const AUTH = {
  token: ''
}

export function setAuth(token: string) {
  AUTH.token = token
}

function getKey() {
  return AUTH.token ? '/me/' : null
}

interface UseAuth {
  me: any
  id: number
  isLoading: boolean
}

interface UseAuthConfig {
  token?: string
  me?: any
}

export default function useAuth(config: UseAuthConfig = {}): UseAuth {
  const { data, error } = useSWR(() => getKey(), fetcher, {
    fallbackData: config.me
  })

  if (config.token) {
    setAuth(config.token)
  }

  const isLoading = !data && !error
  const me = data?.data || {}
  const id = me.restaurants?.[0]?.id

  return {
    isLoading,
    id,
    me
  }
}
