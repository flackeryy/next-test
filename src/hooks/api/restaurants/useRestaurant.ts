import { toast } from 'react-hot-toast'
import { fetcher } from 'services/api/common'
import useSWR from 'swr'

import t from '../../../locales/en/translations.json'
import { editRestaurant } from '../../../services/api/restaurants'

type OnEdit = (id: number, values: any) => void

interface UseRestaurant {
  isLoading: boolean
  restaurant: any
  onEdit: OnEdit
}

interface UseRestaurantConfig {
  id?: number
  restaurant?: any
}

function getKey(id?: number) {
  return id ? `/restaurant/${id}/` : null
}

export default function useRestaurant(
  config: UseRestaurantConfig = {}
): UseRestaurant {
  const {
    data,
    error,
    mutate: revalidate
  } = useSWR(() => getKey(config.id), fetcher, {
    fallbackData: config.restaurant
  })

  const onEdit: OnEdit = async (id, values) => {
    try {
      await editRestaurant(id, values)
      toast.success(t.toaster.success_saved)
      revalidate?.()
    } catch (e) {
      console.error()
      toast.error('Oops error')
    }
  }

  const isLoading = !data && !error
  const restaurant = data?.data || {}

  return {
    onEdit,
    isLoading,
    restaurant
  }
}
