import t from 'locales/en/translations.json'
import { toast } from 'react-hot-toast'
import { fetcher } from 'services/api/common'
import {
  addModifier,
  addModifierOptions,
  deleteModifier,
  deleteModifierOption,
  editModifier,
  editModifierOptions
} from 'services/api/modifiers'
import useSWR from 'swr'
import { getErrorMsg } from 'utils/api/errors'
import { formatOptions, formatValues } from 'utils/api/modifiers'

import useAuth from '../auth/useAuth'

type OnAdd = (values: any, onSuccess?: any) => void
type OnEdit = (id: number, values: any, onSuccess?: any) => void
type OnDelete = (id: number, onSuccess?: any) => void

interface UseModifier {
  onAdd: OnAdd
  onEdit: OnEdit
  onDelete: OnDelete
  onDeleteGroup: OnDelete
  isLoading: boolean
  group: any
}

interface UseModifierConfig {
  id?: number
}

function getKey(restId: number, id?: number) {
  return restId && id ? `/restaurant/${restId}/modifiers_groups/${id}/` : null
}

export default function useModifier(
  config: UseModifierConfig = {}
): UseModifier {
  const auth = useAuth()

  const {
    data,
    error,
    mutate: revalidate
  } = useSWR(() => getKey(auth.id, config.id), fetcher)

  const onAdd: OnAdd = async (values, onSuccess) => {
    try {
      const { options, ...groupValues } = values
      const response = await addModifier(auth.id, formatValues(groupValues))
      await addModifierOptions(auth.id, formatOptions(response.id, options))
      toast.success('Modifier group added')
      onSuccess?.(response.id)
    } catch (e) {
      console.error(e)
      toast.error(getErrorMsg(e))
    }
  }

  const onEdit: OnEdit = async (id, values, onSuccess) => {
    try {
      const { options, ...groupValues } = values
      await editModifierOptions(auth.id, formatOptions(id, options))
      await editModifier(auth.id, id, formatValues(groupValues))
      toast.success('Modifier group updated')
      revalidate?.()
      onSuccess?.()
    } catch (e) {
      console.error(e)
      toast.error(getErrorMsg(e))
    }
  }

  const onDelete: OnDelete = async (id, onSuccess) => {
    try {
      await deleteModifierOption(auth.id, id)
      toast.success(t.toaster.success_deleted)
      onSuccess?.()
    } catch (e) {
      console.error(e)
      toast.error('Oops error')
    }
  }

  const onDeleteGroup: OnDelete = async (id, onSuccess) => {
    try {
      await deleteModifier(auth.id, id)
      toast.success(t.toaster.success_deleted)
      onSuccess?.()
    } catch (e) {
      console.error(e)
      toast.error('Oops error')
    }
  }

  const isLoading = !data && !error
  const group = data?.data || {}
  return {
    onAdd,
    onEdit,
    onDelete,
    onDeleteGroup,
    isLoading,
    group
  }
}
