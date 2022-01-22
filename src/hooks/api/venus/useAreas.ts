import useAuth from 'hooks/api/auth/useAuth'
import { fetcher } from 'services/api/common'
import useSWR from 'swr'

interface UseAreas {
  isLoading: boolean
  areas: any[]
  revalidate: any
}

interface UseAreasConfig {
  areas?: any
}

function getKey(restId: number) {
  return restId ? `/restaurant/${restId}/areas/` : null
}

export default function useAreas(config: UseAreasConfig = {}): UseAreas {
  const auth = useAuth()
  console.log(config)
  const {
    data,
    error,
    mutate: revalidate
  } = useSWR(() => getKey(auth.id), fetcher, {
    fallbackData: config.areas
  })

  const isLoading = !data && !error
  const areas = data?.data || []

  return {
    isLoading,
    areas,
    revalidate
  }
}
