import { Search } from '@mui/icons-material'
import { Box, InputAdornment, TextField } from '@mui/material'
import React from 'react'

import t from '../../locales/en/translations.json'

const OrderSearch = () => (
  <Box
    sx={{
      m: 1,
      maxWidth: '100%'
    }}
  >
    <TextField
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search fontSize="small" />
          </InputAdornment>
        )
      }}
      placeholder={t.orders.all_orders.search}
      variant="outlined"
    />
  </Box>
)

export default OrderSearch
