import { toast } from 'react-hot-toast'
import { editWorkingHours } from 'services/api/restaurants'

type OnEdit = (id: number, values: any) => void

interface UseWorkingHours {
  onEdit: OnEdit
}

interface UseWorkingHoursConfig {
  revalidate?: any
}

export default function useWorkingHours(
  config: UseWorkingHoursConfig = {}
): UseWorkingHours {
  const onEdit: OnEdit = async (id, values) => {
    try {
      await editWorkingHours(id, values)
      config.revalidate?.()
    } catch (e) {
      console.error(e)
      toast.error('Oops error')
    }
  }

  return {
    onEdit
  }
}
