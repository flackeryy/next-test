import { Typography } from '@mui/material'
import * as React from 'react'

import Colors from '../../assets/colors'
// import { formatDistanceToNowStrict } from 'date-fns';
import t from '../../locales/en/translations.json'
import { Customer, Order, OrderStatus } from '../../models/Orders'

interface SelectableOrderTileProps {
  order: Order
  customer: Customer
  isSelected: boolean
  onClick: () => void
}

const SelectableOrderTile = ({
  order,
  customer,
  isSelected,
  onClick
}: SelectableOrderTileProps) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: isSelected ? Colors.GREY['100'] : Colors.WHITE,
      padding: 8,
      cursor: 'pointer'
    }}
    onClick={onClick}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Typography variant="h6" sx={{ width: '100%' }}>
        {`#${order.confirmationId}`}
      </Typography>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 6,
          borderRadius: 8,
          textAlign: 'center',
          minWidth: '40%',
          maxHeight: 24,
          backgroundColor:
            order.status === OrderStatus.COMPLETED ? '#C6EFCE' : '#FFEB9C'
        }}
      >
        <Typography
          variant="subtitle2"
          fontSize={12}
          color={order.status === OrderStatus.COMPLETED ? '#006100' : '#9C6500'}
        >
          {order.status}
        </Typography>
      </div>
    </div>
    <div style={{ display: 'flex' }}>
      <Typography variant="caption" color="textSecondary">
        {customer.name}
      </Typography>
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Typography variant="caption" color="textSecondary">
        {`${t.orders.table} ${order.tableNumber}`}
      </Typography>
      <Typography variant="caption" color="textSecondary">
        {order.createdAt}
        {/*{formatDistanceToNowStrict(order.createdAt)} {t.orders.ago}*/}
      </Typography>
    </div>
  </div>
)

export default SelectableOrderTile
