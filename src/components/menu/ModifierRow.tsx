import { DeleteForever, ImportExport } from '@mui/icons-material'
import {
  IconButton,
  Switch,
  TableCell,
  TableRow,
  TextField
} from '@mui/material'
import t from 'locales/en/translations.json'
import * as React from 'react'
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'
import { Controller, useFormContext } from 'react-hook-form'

import CurrencyComponent from './CurrencyComponent'

const classes = {
  row: (isDragging: boolean) => ({
    ...(isDragging && {
      border: '1px solid rgba(224, 224, 224, 1)',
      backgroundColor: '#fff'
    })
  })
}

const ModifierRow = ({
  name,
  onDelete,
  provided,
  snapshot
}: {
  name: string
  onDelete: any
  provided: DraggableProvided
  snapshot: DraggableStateSnapshot
}) => {
  const methods = useFormContext()
  return (
    <TableRow
      sx={classes.row(snapshot.isDragging)}
      ref={provided.innerRef}
      {...provided.draggableProps}
    >
      <TableCell
        align="left"
        style={{ cursor: 'pointer' }}
        {...provided.dragHandleProps}
      >
        <ImportExport />
      </TableCell>

      <TableCell>
        <TextField
          placeholder={t.menus.create_menu_modal.name}
          variant="outlined"
          {...methods.register(`${name}.name`)}
        />
      </TableCell>
      <TableCell>
        <Controller
          render={({ field: { name, value } }) => (
            <CurrencyComponent
              maxWidth={150}
              value={value}
              setValue={(value) => methods.setValue(name, value)}
            />
          )}
          name={`${name}.price`}
        />
      </TableCell>
      <TableCell>
        <div style={{ display: 'flex' }}>
          <Controller
            render={({ field: { name, value } }) => {
              return (
                <Switch
                  edge="start"
                  color="primary"
                  checked={value}
                  onChange={(e) => {
                    methods.setValue(name, e.target.checked)
                  }}
                />
              )
            }}
            name={`${name}.in_stock`}
          />

          <IconButton onClick={onDelete}>
            <DeleteForever />
          </IconButton>
        </div>
      </TableCell>
    </TableRow>
  )
}

export default ModifierRow
