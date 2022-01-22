import t from 'locales/en/translations.json'
import { toast } from 'react-hot-toast'
import { fetcher } from 'services/api/common'
import {
  addProduct,
  addProductImage,
  editProduct,
  removeProduct
} from 'services/api/products'
import useSWR, { mutate as revalidate } from 'swr'
import { getErrorMsg } from 'utils/api/errors'
import { formatProductValues } from 'utils/api/product'

import useAuth from '../auth/useAuth'
import { getKey as getProductsKey } from './useProducts'

type OnAdd = (values: any, onSuccess?: any) => void
type OnEdit = (id: number, values: any, onSuccess?: any) => void
type OnRemove = (id: number, categoryId: number, onSuccess?: any) => void

interface UseProduct {
  onAdd: OnAdd
  onEdit: OnEdit
  onRemove: OnRemove
  isLoading: boolean
  product: any
}

interface UseProductConfig {
  id?: number
  revalidate?: any
}

function getKey(restId: number, id?: number) {
  return restId && id ? `/restaurant/${restId}/products/${id}/` : null
}

export default function useProduct(config: UseProductConfig = {}): UseProduct {
  const auth = useAuth()

  const { data, error } = useSWR(() => getKey(auth.id, config.id), fetcher)

  const onAdd: OnAdd = async (values: any, onSuccess) => {
    try {
      const { file, ...productValues } = values
      const response = await addProduct(
        auth.id,
        formatProductValues(productValues)
      )

      if (file) {
        try {
          await addProductImage(auth.id, response.id, file)
        } catch (e) {
          console.error(e)
          toast.error('Error uploading file')
        }
      }

      toast.success(t.toaster.success_created)
      revalidate?.(getProductsKey(auth.id, values.category))
      onSuccess?.()
    } catch (e) {
      console.error(e)
      toast.error(getErrorMsg(e))
    }
  }

  const onEdit: OnEdit = async (id: number, values: any, onSuccess) => {
    try {
      const { file, ...productValues } = values
      const response = await editProduct(
        auth.id,
        id,
        formatProductValues(productValues)
      )

      if (file) {
        try {
          await addProductImage(auth.id, response.id, file)
        } catch (e) {
          console.error(e)
          toast.error('Error uploading file')
        }
      }

      toast.success(t.toaster.success_saved)
      config.revalidate?.()
      revalidate?.(getProductsKey(auth.id, values.category))
      revalidate?.(getKey(auth.id, id))
      onSuccess?.()
    } catch (e) {
      console.error(e)
      toast.error(getErrorMsg(e))
    }
  }

  const onRemove: OnRemove = async (id, categoryId, onSuccess) => {
    try {
      await removeProduct(auth.id, id)
      toast.success(t.toaster.success_deleted)

      revalidate?.(getProductsKey(auth.id, categoryId))
      onSuccess?.()
    } catch (e) {
      console.error(e)
      toast.error('Oops error')
    }
  }

  const isLoading = !data && !error
  const product = data?.data || {}

  return {
    onAdd,
    onEdit,
    onRemove,
    isLoading,
    product
  }
}
