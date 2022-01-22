import { Switch, TableCell } from '@mui/material'
import React from 'react'

const ActiveStateCell = ({
  isAvailable,
  onChange
}: {
  isAvailable: boolean
  onChange: (e: boolean) => void
}) => (
  <TableCell width="20%">
    <Switch
      color="primary"
      checked={isAvailable}
      edge="start"
      name="isAvailable"
      onChange={(e) => onChange(e.target.checked)}
    />
  </TableCell>
)

export default ActiveStateCell
