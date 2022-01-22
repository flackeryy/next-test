import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { reorderMenus } from 'services/api/menus'

import useAuth from '../auth/useAuth'

type OnReorder = (data: any[]) => void

interface UseMenusReorder {
  isLoading: boolean
  onReorder: OnReorder
}

export default function useMenusReorder(): UseMenusReorder {
  const [isLoading, setLoading] = useState(false)
  const auth = useAuth()

  const onReorder: OnReorder = async (data) => {
    try {
      setLoading(true)
      await reorderMenus(auth.id, data)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      console.error(e)
      toast.error('Oops error!')
    }
  }

  return {
    isLoading,
    onReorder
  }
}
