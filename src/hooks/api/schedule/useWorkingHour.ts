import { toast } from 'react-hot-toast'
import { deleteWorkingHour } from 'services/api/restaurants'

import useAuth from '../auth/useAuth'

type OnDelete = (id: number) => void

interface UseWorkingHour {
  onDelete: OnDelete
}

export default function useWorkingHour(): UseWorkingHour {
  const auth = useAuth()

  const onDelete: OnDelete = async (id) => {
    try {
      await deleteWorkingHour(auth.id, id)
    } catch (e) {
      toast.error('Oops error!')
      console.error(e)
    }
  }

  return {
    onDelete
  }
}
