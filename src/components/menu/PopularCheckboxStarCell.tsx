import { Star, StarBorder } from '@mui/icons-material'
import { Checkbox, TableCell } from '@mui/material'
import React from 'react'

const PopularCheckboxStarCell = ({
  isPopular,
  onChange
}: {
  isPopular: boolean
  onChange: (e: boolean) => void
}) => (
  <TableCell>
    <Checkbox
      icon={<StarBorder />}
      checkedIcon={<Star />}
      color="primary"
      checked={isPopular}
      name="isPopular"
      edge="start"
      onChange={(e) => onChange(e.target.checked)}
    />
  </TableCell>
)

export default PopularCheckboxStarCell
