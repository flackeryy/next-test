import { toast } from 'react-hot-toast'
import { fetcher } from 'services/api/common'
import { editWorkingDays } from 'services/api/restaurants'
import useSWR from 'swr'

type OnEdit = (id: number, values: any) => void

interface UseWorkingDays {
  isLoading: boolean
  workingDays: any[]
  onEdit: OnEdit
  revalidate: any
}

interface UseWorkingDaysConfig {
  id?: number
  days?: any
}

function getKey(id?: number) {
  return id ? `/restaurant/${id}/working_days/` : null
}

export default function useWorkingDays(
  config: UseWorkingDaysConfig = {}
): UseWorkingDays {
  const {
    data,
    error,
    mutate: revalidate
  } = useSWR(() => getKey(config.id), fetcher, {
    fallbackData: config.days
  })

  const onEdit: OnEdit = async (id, values) => {
    try {
      await editWorkingDays(id, values)
      revalidate?.()
    } catch (e) {
      console.error(e)
      toast.error('Oops error')
    }
  }

  const isLoading = !data && !error
  const workingDays = data?.data || []

  return {
    onEdit,
    isLoading,
    workingDays,
    revalidate
  }
}
