import { TableCell } from '@mui/material'
import React from 'react'

const numeral = require('numeral')

const PriceCell = ({ price }: { price: number }) => (
  <TableCell>{numeral(price).format(`$0,0.00`)}</TableCell>
)

export default PriceCell
