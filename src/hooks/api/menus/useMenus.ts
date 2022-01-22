import { fetcher } from 'services/api/common'
import useSWR from 'swr'

import useMenu, { UseMenu } from './useMenu'

interface UseMenus extends UseMenu {
  isLoading: boolean
  menus: any[]
  revalidate: any
}

function getKey(id?: number) {
  return id ? `/restaurant/${id}/menus/` : null
}

interface UseMenusConfig {
  id?: number
  menus?: any
}

export default function useMenus(config: UseMenusConfig = {}): UseMenus {
  const {
    data,
    error,
    mutate: revalidate
  } = useSWR(() => getKey(config.id), fetcher, {
    fallbackData: config.menus
  })

  const isLoading = !data && !error
  const menus = data?.data || []

  const menu = useMenu({ revalidate })

  return {
    isLoading,
    menus,
    revalidate,
    ...menu
  }
}
