import { useState } from 'react'
import { fetcher } from 'services/api/common'
import { editProduct } from 'services/api/products'
import useSWR from 'swr'

import useAuth from '../auth/useAuth'

type OnReorder = (products: any[]) => void

interface UseProducts {
  isLoading: boolean
  products: any[]
  revalidate: any
  isReorderLoading: boolean
  onReorder: OnReorder
}

interface UseProductsConfig {
  categoryId?: number
}

export function getKey(restId: number, categoryId?: number) {
  return categoryId && restId
    ? `/restaurant/${restId}/categories/${categoryId}/products/`
    : null
}

export default function useProducts(
  config: UseProductsConfig = {}
): UseProducts {
  const auth = useAuth()

  const [isReorderLoading, setReorderLoading] = useState(false)

  const {
    data,
    error,
    mutate: revalidate
  } = useSWR(() => getKey(auth.id, config.categoryId), fetcher)

  const onReorder: OnReorder = async (products) => {
    try {
      setReorderLoading(true)
      const promises = products.map((product) => {
        return editProduct(auth.id, product.id, {
          sort_order: product.sort_order
        })
      })

      await Promise.all(promises)
      setReorderLoading(false)
    } catch (e) {
      setReorderLoading(false)
      console.error(e)
    }
  }

  const isLoading = !data && !error
  const products = data?.data?.products || []

  return {
    isLoading,
    isReorderLoading,
    products,
    revalidate,
    onReorder
  }
}
