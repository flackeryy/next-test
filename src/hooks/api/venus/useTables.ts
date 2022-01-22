import { fetcher } from 'services/api/common'
import useSWR from 'swr'

import useAuth from '../auth/useAuth'

export function getTablesKey(restId: number, areaId?: number) {
  return restId && areaId
    ? `/restaurant/${restId}/areas/${areaId}/tables/`
    : null
}

interface UseTables {
  isLoading: boolean
  tables: any[]
}

interface UseTablesConfig {
  areaId?: number
}

export default function useTables(config: UseTablesConfig = {}): UseTables {
  const auth = useAuth()

  const { data, error } = useSWR(
    () => getTablesKey(auth.id, config.areaId),
    fetcher
  )

  const isLoading = !data && !error
  const tables = data?.data?.tables || []

  return {
    isLoading,
    tables
  }
}
