import { useMenusContext } from 'contexts/MenusContext'
import t from 'locales/en/translations.json'
import { toast } from 'react-hot-toast'
import { fetcher } from 'services/api/common'
import { addMenu, addMenuImage, editMenu, removeMenu } from 'services/api/menus'
import useSWR from 'swr'
import { getErrorMsg } from 'utils/api/errors'

import useAuth from '../auth/useAuth'

type OnAdd = (data: any, onSuccess: any) => void
type OnEdit = (id: number, data: any, onSuccess?: any) => void
type OnRemove = (id: number, onSuccess?: any) => void

export interface UseMenu {
  onAdd: OnAdd
  onEdit: OnEdit
  onRemove: OnRemove
  isMenuLoading: boolean
  menu: any
}

interface UseMenusConfig {
  revalidate?: any
  id?: string
  menu?: any
}

function getKey(restId?: number, id?: string) {
  return id && restId ? `/restaurant/${restId}/menus/${id}/` : null
}

export default function useMenu(config: UseMenusConfig = {}): UseMenu {
  const menusContext = useMenusContext()
  const auth = useAuth()

  const {
    data,
    error,
    mutate: revalidate
  } = useSWR(() => getKey(auth.id, config.id), fetcher, {
    fallbackData: config.menu
  })

  const onAdd: OnAdd = async (data, onSuccess) => {
    try {
      const { file, ...menuData } = data
      const response = await addMenu(auth.id, menuData)

      if (file) {
        try {
          await addMenuImage(auth.id, response.data?.id, file)
        } catch (e) {
          toast.error('Error uploading file')
          console.error(e)
        }
      }

      toast.success(t.toaster.success_created)
      menusContext.revalidate()
      config.revalidate?.()
      onSuccess()
    } catch (e) {
      toast.error(getErrorMsg(e))
      console.error(e)
    }
  }

  const onEdit: OnEdit = async (id, data, onSuccess) => {
    try {
      const { file, ...menuData } = data

      await editMenu(auth.id, id, menuData)

      if (file && typeof file !== 'string') {
        try {
          await addMenuImage(auth.id, id, file)
        } catch (e) {
          toast.error('Error uploading file')
          console.error(e)
        }
      }

      toast.success(t.toaster.success_saved)
      menusContext.revalidate()
      config.revalidate?.()
      revalidate?.()
      onSuccess?.()
    } catch (e) {
      toast.error('Oops error')
      console.error(e)
    }
  }

  const onRemove: OnRemove = async (id, onSuccess) => {
    try {
      await removeMenu(auth.id, id)
      toast.success(t.toaster.success_deleted)
      menusContext.revalidate()
      config.revalidate?.()
      onSuccess?.()
    } catch (e) {
      toast.error('Oops error')
      console.error(e)
    }
  }

  const isMenuLoading = !data && !error
  const menu = data?.data || {}
  return {
    onAdd,
    onEdit,
    onRemove,
    isMenuLoading,
    menu
  }
}
