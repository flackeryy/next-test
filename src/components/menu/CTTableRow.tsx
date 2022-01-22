import { TableRow } from '@mui/material'
import React from 'react'

import ActiveStateCell from './ActiveStateCell'
import CheckboxCell from './CheckboxCell'
import EditButtonCell from './EditButtonCell'
import ImageCell from './ImageCell'
import InventoryLabelCell from './InventoryLabelCell'
import ModifierGroupCell from './ModifierGroupCell'
import PopularCheckboxStarCell from './PopularCheckboxStarCell'
import PriceCell from './PriceCell'

interface TableRowProps {
  product: any
  onClick: () => void
}

const CTTableRow = ({ product, onClick }: TableRowProps) => (
  <TableRow hover>
    <CheckboxCell />
    <ImageCell image={product.image} name={product.name} />
    <InventoryLabelCell inventoryType={product.inventoryType} />
    <PopularCheckboxStarCell
      isPopular={product.isPopular}
      onChange={() => {}}
    />
    <ModifierGroupCell modifiers={product.modifiers} />
    <ActiveStateCell isAvailable={product.isAvailable} onChange={() => {}} />
    <PriceCell price={product.price} />
    <EditButtonCell onClick={onClick} />
  </TableRow>
)

export default CTTableRow
