import { Box, FormControlLabel, Switch } from '@mui/material'
import React from 'react'

import t from '../../locales/en/translations.json'

const OrderGroupByDateSwitch = () => (
  <Box sx={{ m: 2 }}>
    <FormControlLabel
      control={<Switch color="primary" name="inStock" />}
      label={t.orders.all_orders.group_by_date}
    />
  </Box>
)

export default OrderGroupByDateSwitch
