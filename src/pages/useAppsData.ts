import { getApps } from '@/api/app-service/getApps'
import { useCallback, useEffect, useState } from 'react'

type GetAppsResponse = Awaited<ReturnType<typeof getApps>>

export const useAppsData = () => {
  const [rows, setRows] = useState<GetAppsResponse['appRows']>([])
  const [totalRows, setTotalRows] = useState<GetAppsResponse['totalCount']>(0)
  const [rowsPerPage, setRowsPerPage] = useState(25)

  useEffect(() => {
    getApps({ pageNumber: 0, pageSize: rowsPerPage })
      .then(({ appRows, totalCount }) => {
        setRows(appRows)
        setTotalRows(totalCount)
      })
      .catch((error) => {
        console.error(error.message)
      })
  }, [rowsPerPage])

  const updateRowsPerPage = useCallback((rows: number) => {
    setRowsPerPage(rows)
  }, [])

  return {
    rows,
    totalRows,
    rowsPerPage,
    updateRowsPerPage,
  }
}
