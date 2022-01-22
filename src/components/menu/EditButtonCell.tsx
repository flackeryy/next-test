import { Create } from '@mui/icons-material'
import { TableCell } from '@mui/material'
import React from 'react'

const EditButtonCell = ({ onClick }: { onClick: () => void }) => (
  <TableCell align="right">
    <Create
      fontSize="small"
      onClick={onClick}
      sx={{ cursor: 'pointer' }}
      color="secondary"
    />
  </TableCell>
)

export default EditButtonCell
