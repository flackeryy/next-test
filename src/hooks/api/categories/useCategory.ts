import { useCategoriesContext } from 'contexts/CategoriesContext'
import t from 'locales/en/translations.json'
import { toast } from 'react-hot-toast'
import {
  addCategory,
  editCategory,
  removeCategory,
  reorderCategories
} from 'services/api/categories'
import { fetcher } from 'services/api/common'
import useSWR from 'swr'
import { getErrorMsg } from 'utils/api/errors'

import useAuth from '../auth/useAuth'

type OnAdd = (menuId: string | number, data: any, onSuccess?: any) => void
type OnEdit = (id: number, data: any, onSuccess?: any) => void
type OnRemove = (id: number, onSuccess?: any) => void
type OnReorder = (data: any, onSuccess?: any) => void

interface UseCategory {
  onAdd: OnAdd
  onEdit: OnEdit
  onRemove: OnRemove
  onReorder: OnReorder
  isCategoryLoading: boolean
  category: any
}

interface UseCategoryConfig {
  id?: number
}

function getKey(restId: number, id?: number) {
  return id && restId ? `/restaurant/${restId}/categories/${id}/` : null
}

export default function useCategory(
  config: UseCategoryConfig = {}
): UseCategory {
  const auth = useAuth()
  const categoriesContext = useCategoriesContext()

  const {
    data,
    error,
    mutate: revalidate
  } = useSWR(() => getKey(auth.id, config.id), fetcher)

  const onAdd: OnAdd = async (menuId, data, onSuccess) => {
    try {
      await addCategory(auth.id, menuId, data)
      toast.success(t.toaster.success_created)
      categoriesContext.revalidate()
      onSuccess?.()
    } catch (e) {
      toast.error(getErrorMsg(e))
      console.error(e)
    }
  }

  const onEdit: OnEdit = async (id, data, onSuccess) => {
    try {
      await editCategory(auth.id, id, data)
      toast.success(t.toaster.success_saved)
      categoriesContext.revalidate()
      revalidate?.()
      onSuccess?.()
    } catch (e) {
      toast.error(getErrorMsg(e))
      console.error(e)
    }
  }

  const onRemove: OnRemove = async (id, onSuccess) => {
    try {
      await removeCategory(auth.id, id)
      toast.success(t.toaster.success_deleted)
      categoriesContext.revalidate()
      onSuccess?.()
    } catch (e) {
      toast.error(getErrorMsg(e))
      console.error(e)
    }
  }

  const onReorder: OnReorder = async (data, onSuccess) => {
    try {
      await reorderCategories(auth.id, data)
      categoriesContext.revalidate()
      onSuccess?.()
    } catch (e) {
      toast.error(getErrorMsg(e))
      console.error(e)
    }
  }

  const isCategoryLoading = !data && !error
  const category = data?.data || {}
  return {
    onAdd,
    onEdit,
    onRemove,
    onReorder,
    isCategoryLoading,
    category
  }
}
