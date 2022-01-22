import { Box, TextField } from '@mui/material'
import React from 'react'

const sortOptions = [
  {
    label: 'Last updated (newest first)',
    value: 'updatedAt|desc'
  },
  {
    label: 'Last updated (oldest first)',
    value: 'updatedAt|asc'
  },
  {
    label: 'Creation date (newest first)',
    value: 'createdAt|desc'
  },
  {
    label: 'Creation date (oldest first)',
    value: 'createdAt|asc'
  }
]

const OrderSort = () => (
  <Box
    sx={{
      m: 1,
      maxWidth: '100%',
      width: 240
    }}
  >
    <TextField
      label="Sort By"
      name="sort"
      select
      SelectProps={{ native: true }}
      variant="outlined"
    >
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>
  </Box>
)

export default OrderSort
