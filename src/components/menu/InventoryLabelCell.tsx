import { TableCell } from '@mui/material'
import React from 'react'

import Label, { Color } from '../Label'

export enum InventoryType {
  IN_STOCK = 'In Stock',
  OUT_OF_STOCK = 'Out of Stock',
  LIMITED = 'limited'
}

const getInventoryLabel = (inventoryType: InventoryType) => {
  let color
  switch (inventoryType) {
    case InventoryType.IN_STOCK:
      color = 'success'
      break
    case InventoryType.LIMITED:
      color = 'warning'
      break
    case InventoryType.OUT_OF_STOCK:
      color = 'error'
      break
    default:
      color = 'success'
      break
  }
  return <Label color={color as Color}>{inventoryType}</Label>
}

const InventoryLabelCell = ({
  inventoryType
}: {
  inventoryType: InventoryType
}) => <TableCell>{getInventoryLabel(inventoryType)}</TableCell>
export default InventoryLabelCell
