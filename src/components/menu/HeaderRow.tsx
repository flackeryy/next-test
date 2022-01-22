import { TableCell, TableHead, TableRow, Typography } from '@mui/material'
import * as React from 'react'

const HeaderRow = () => (
  <TableHead>
    <TableRow>
      <TableCell align="left">&nbsp;</TableCell>
      <TableCell>
        <Typography>Option</Typography>
      </TableCell>
      <TableCell>
        <Typography>Price</Typography>
      </TableCell>
      <TableCell>
        <Typography>In stock</Typography>
      </TableCell>
    </TableRow>
  </TableHead>
)
export default HeaderRow
