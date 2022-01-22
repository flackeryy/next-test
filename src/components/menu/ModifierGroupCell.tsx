import { TableCell } from '@mui/material'
import React from 'react'

const ModifierGroupCell = ({ modifiers }: { modifiers: number }) => (
  <TableCell width="25%">
    {modifiers} {modifiers === 1 ? 'group' : 'groups'}
  </TableCell>
)

export default ModifierGroupCell
