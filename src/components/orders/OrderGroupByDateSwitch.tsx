import { Box, TextField } from '@mui/material'
import React from 'react'

import t from '../../locales/en/translations.json'
import { OrderStatus } from '../../models/Orders'
import { OptionSelect } from './AllOrdersList'

const OrderGroupByDateSwitch = () => {
  const orderStatusOptions: OptionSelect[] = []
  Object.values(OrderStatus).map((categoryName) => {
    orderStatusOptions.push({
      label: categoryName,
      value: categoryName.toLocaleLowerCase()
    })
  })
  orderStatusOptions.push({ label: 'All', value: 'all' })

  return (
    <Box
      sx={{
        m: 1,
        maxWidth: '100%',
        width: 240
      }}
    >
      <TextField
        fullWidth
        label={t.orders.all_orders.order_status}
        name="orderStatus"
        select
        SelectProps={{ native: true }}
        variant="outlined"
      >
        {orderStatusOptions.map((categoryOption) => (
          <option key={categoryOption.value} value={categoryOption.value}>
            {categoryOption.label}
          </option>
        ))}
      </TextField>
    </Box>
  )
}

export default OrderGroupByDateSwitch
