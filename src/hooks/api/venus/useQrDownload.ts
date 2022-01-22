import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { getAllTables } from 'services/api/venus'
import { getErrorMsg } from 'utils/api/errors'
import { downloadQr } from 'utils/qr'

import useAuth from '../auth/useAuth'

type OnDownload = (url: string, table: string, area: string) => void
type OnDownloadAll = (areas: any) => void

interface UseQrDownload {
  onDownloadAll: OnDownloadAll
  onDownload: OnDownload
  isDownloadAllLoading: boolean
}

export default function useQrDownload(): UseQrDownload {
  const auth = useAuth()
  const [isDownloadAllLoading, setDownloadAllLoading] = useState(false)

  const onDownloadAll: OnDownloadAll = async (areas: any) => {
    try {
      setDownloadAllLoading(true)
      const tables = await getAllTables(auth.id)
      await downloadQr(tables, areas, true)
      setDownloadAllLoading(false)
    } catch (e) {
      setDownloadAllLoading(false)
      toast.error(getErrorMsg(e))
      console.error(e)
    }
  }

  const onDownload: OnDownload = (url, table, area) => {
    try {
      downloadQr(
        [
          {
            link: url,
            name: table,
            area
          }
        ],
        {},
        false
      )
    } catch (e) {
      toast.error(getErrorMsg(e))
      console.error(e)
    }
  }

  return {
    onDownload,
    onDownloadAll,
    isDownloadAllLoading
  }
}
