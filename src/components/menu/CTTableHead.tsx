import { Checkbox, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

import t from '../../locales/en/translations.json'

const columnNameArr = Object.values(t.table.column_name)

const CTTableHead = ({ isGlobal }: { isGlobal?: boolean }) => (
  <TableHead>
    <TableRow>
      {isGlobal ? (
        <TableCell padding="checkbox">
          <Checkbox color="primary" />
        </TableCell>
      ) : (
        <TableCell align="left">&nbsp;</TableCell>
      )}
      {isGlobal ? (
        <TableCell>{t.table.global_column_name.modifiers}</TableCell>
      ) : null}
      {columnNameArr.map((columnName, index) => (
        <TableCell
          key={index}
          align={columnNameArr.length - 1 === index ? 'right' : 'left'}
        >
          {columnName}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
)

export default CTTableHead
