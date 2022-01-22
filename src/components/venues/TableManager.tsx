import LoadingButton from '@mui/lab/LoadingButton'
import { Grid, Typography } from '@mui/material'
import useQrDownload from 'hooks/api/venus/useQrDownload'
import useTable from 'hooks/api/venus/useTable'
import useTables from 'hooks/api/venus/useTables'
import t from 'locales/en/translations.json'
import React, { useEffect, useState } from 'react'
import { areasToObj } from 'utils/api/areas'

import Cell from './Cell'
import DestructiveButton from './DestructiveButton'
import QRCodeColumn from './QRCodeColumn'
import TransparentRoundedDashedButton from './TransparentRoundedDashedButton'

interface TableManagerProps {
  areas: any[]
  onAddArea: () => void
  onAddTable: (areaId: number) => void
  onDeleteArea: (areaId: number) => void
  onDeleteTable: (tableId: number) => void
  onClearAreaRef: (ref: any) => void
  onClearTableRef: (ref: any) => void
  onSelectedArea: (id: number) => void
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}

const TableManager = ({
  areas,
  onAddArea,
  onAddTable,
  onDeleteArea,
  onDeleteTable,
  onClearAreaRef,
  onClearTableRef,
  onSelectedArea
}: TableManagerProps) => {
  const qrDownload = useQrDownload()

  const [selectedArea, setSelectedArea] = useState<number | undefined>(
    undefined
  )
  const [selectedTable, setSelectedTable] = useState<number | undefined>(
    undefined
  )

  useEffect(() => {
    onSelectedArea(selectedArea as any)
  }, [selectedArea])

  const { tables } = useTables({ areaId: selectedArea })
  const { table } = useTable({ id: selectedTable })

  onClearAreaRef(() => setSelectedArea(undefined))
  onClearTableRef(() => setSelectedTable(undefined))

  const activeArea = areas.find((area) => area.id === selectedArea)

  return (
    <>
      <Grid container sx={styles.header}>
        <Typography variant="h6">{t.venue.header}</Typography>

        <LoadingButton
          variant="contained"
          onClick={() => qrDownload.onDownloadAll(areasToObj(areas))}
          loading={qrDownload.isDownloadAllLoading}
        >
          Download QRs
        </LoadingButton>
      </Grid>

      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        {t.venue.description}
      </Typography>

      <div style={{ display: 'flex' }}>
        <div
          style={{ display: 'flex', flexDirection: 'column', minWidth: '33%' }}
        >
          {areas.map((area) => (
            <div key={area.id} style={{ display: 'flex' }}>
              <Cell
                hasChip
                onClick={() => {
                  setSelectedArea(area.id)
                }}
                text={area.name}
                chipText={`${area.tables_amount} tables`}
                isSelected={area.id === selectedArea}
              />
            </div>
          ))}
          <TransparentRoundedDashedButton
            text={t.venue.add_area_button_text}
            onClick={onAddArea}
          />
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', minWidth: '33%' }}
        >
          {selectedArea ? (
            <>
              {tables.map((table: any) => (
                <Cell
                  key={table.id}
                  onClick={() => {
                    setSelectedTable(table.id)
                  }}
                  text={table.name}
                  isSelected={table.id === selectedTable}
                />
              ))}
              <TransparentRoundedDashedButton
                text={t.venue.add_table_button_text}
                onClick={() => onAddTable(selectedArea)}
              />
              <DestructiveButton
                onClick={() => onDeleteArea(selectedArea)}
                text={t.venue.delete_area_button_text}
                style={{ textAlign: 'center' }}
              />
            </>
          ) : null}
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', minWidth: '33%' }}
        >
          {selectedTable && table.id ? (
            <QRCodeColumn
              url={table.link}
              onDeleteTable={() => onDeleteTable(selectedTable)}
              tableName={`${table.name || '-'}`}
              onDownload={() =>
                qrDownload.onDownload(
                  table.link,
                  table.name,
                  activeArea?.name as string
                )
              }
            />
          ) : null}
        </div>
      </div>
    </>
  )
}

export default TableManager
