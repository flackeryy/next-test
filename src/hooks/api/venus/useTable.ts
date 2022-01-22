import { useAreasContext } from 'contexts/AreasContext'
import t from 'locales/en/translations.json'
import { toast } from 'react-hot-toast'
import { fetcher } from 'services/api/common'
import { addTable, deleteTable } from 'services/api/venus'
import useSWR, { mutate as revalidate } from 'swr'

import useAuth from '../auth/useAuth'
import { getTablesKey } from './useTables'

type OnAdd = (areaId: number, values: any, onSuccess?: any) => void
type OnRemove = (areaId: number, tableId: number, onSuccess?: any) => void

interface UseTable {
  onAdd: OnAdd
  onRemove: OnRemove
  isLoading: boolean
  table: any
}

interface UseTableConfig {
  id?: number
}

function getKey(restId: number, id?: number) {
  return restId && id ? `/restaurant/${restId}/tables/${id}/` : null
}

export default function useTable(config: UseTableConfig = {}): UseTable {
  const auth = useAuth()
  const areasContext = useAreasContext()

  const { data, error } = useSWR(() => getKey(auth.id, config.id), fetcher)

  const onAdd: OnAdd = async (areaId, values, onSuccess) => {
    try {
      await addTable(auth.id, { ...values, area: areaId })
      toast.success(t.toaster.success_created)
      revalidate?.(getTablesKey(auth.id, areaId))
      areasContext.revalidate?.()
      onSuccess?.()
    } catch (e) {
      console.error(e)
      toast.error('Oops error')
    }
  }

  const onRemove: OnRemove = async (areaId, tableId, onSuccess) => {
    try {
      await deleteTable(auth.id, tableId)
      toast.success(t.toaster.success_deleted)
      revalidate?.(getTablesKey(auth.id, areaId))
      areasContext.revalidate?.()
      onSuccess?.()
    } catch (e) {
      console.error(e)
      toast.error('Oops error')
    }
  }

  const isLoading = !data && !error
  const table = data?.data || {}

  return {
    onAdd,
    onRemove,
    isLoading,
    table
  }
}
