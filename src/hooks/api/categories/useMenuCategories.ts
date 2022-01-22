import useSWR from 'swr'

import { fetcher } from '../../../services/api/common'
import useAuth from '../auth/useAuth'

interface UseMenuCategoriesConfig {
  id?: number | string
  categories?: any
}

interface UseMenuCategories {
  isLoading: boolean
  menuCategories: any[]
  revalidate: any
}

function getKey(restId: number, id: string) {
  return id && restId ? `/restaurant/${restId}/menus/${id}/categories/` : null
}

export default function useMenuCategories(
  config: UseMenuCategoriesConfig = {}
): UseMenuCategories {
  const auth = useAuth()

  const { data, error, mutate } = useSWR(
    () => getKey(auth.id, config.id as string),
    fetcher,
    {
      fallbackData: config.categories
    }
  )

  const isLoading = !data && !error
  const menuCategories = data?.data?.categories || []

  return {
    isLoading,
    menuCategories,
    revalidate: mutate
  }
}
