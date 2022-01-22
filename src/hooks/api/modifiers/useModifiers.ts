import { fetcher } from 'services/api/common'
import useSWR from 'swr'

import useAuth from '../auth/useAuth'

interface UseModifiers {
  isLoading: boolean
  groups: any[]
  revalidate: any
}

function getKey(restId: number) {
  return restId ? `/restaurant/${restId}/modifiers_groups/` : null
}

export default function useModifiers(): UseModifiers {
  const auth = useAuth()

  const {
    data,
    error,
    mutate: revalidate
  } = useSWR(() => getKey(auth.id), fetcher)

  const isLoading = !data && !error
  const groups = data?.data || []

  return {
    isLoading,
    groups,
    revalidate
  }
}
