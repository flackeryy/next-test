import { useAreasContext } from 'contexts/AreasContext'
import t from 'locales/en/translations.json'
import { toast } from 'react-hot-toast'
import { addArea, deleteArea } from 'services/api/venus'

import useAuth from '../auth/useAuth'

type OnAdd = (values: any, onSuccess?: any) => void
type OnRemove = (id: number, onSuccess?: any) => void

interface UseArea {
  onAdd: OnAdd
  onRemove: OnRemove
}

export default function useArea(): UseArea {
  const areasContext = useAreasContext()
  const auth = useAuth()

  const onAdd: OnAdd = async (values, onSuccess) => {
    try {
      await addArea(auth.id, values)
      toast.success(t.toaster.success_created)
      areasContext.revalidate?.()
      onSuccess?.()
    } catch (e) {
      console.error(e)
      toast.error('Oops error')
    }
  }

  const onRemove: OnRemove = async (id, onSuccess) => {
    try {
      await deleteArea(auth.id, id)
      toast.success(t.toaster.success_deleted)
      areasContext.revalidate?.()
      onSuccess?.()
    } catch (e) {
      console.error(e)
      toast.error('Oops error')
    }
  }

  return {
    onAdd,
    onRemove
  }
}
