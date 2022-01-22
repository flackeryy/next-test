import {
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import * as React from 'react'

import Colors from '../../assets/colors'
import t from '../../locales/en/translations.json'
import { Customer, Order } from '../../models/Orders'

interface ReceiptTileProps {
  order: Order
  customer: Customer
}

const ReceiptTile = ({ order, customer }: ReceiptTileProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', padding: 8 }}>
    <Typography variant="h5" gutterBottom>
      {t.orders.order_confirmation}
      {order.confirmationId}
    </Typography>
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        {customer.name}
      </Typography>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.GREY['200'],
          color: Colors.BLACK,
          padding: 8,
          borderRadius: 8,
          width: '20%',
          marginBottom: 8
        }}
      >
        <Typography variant="body2">
          {`${t.orders.table} ${order.tableNumber}`}
        </Typography>
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', marginBottom: 8 }}
      >
        <div style={{ display: 'flex' }}>
          <Typography sx={{ mr: 4.6 }} variant="subtitle2" fontWeight="bold">
            {t.orders.payment_method}
          </Typography>
          <Typography variant="subtitle2">{order.paymentMethod}</Typography>
        </div>
        <div style={{ display: 'flex' }}>
          <Typography sx={{ mr: 2.2 }} variant="subtitle2" fontWeight="bold">
            {t.orders.customer_request}
          </Typography>
          <Typography variant="subtitle2">{order.customerRequest}</Typography>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="receipt table">
          <TableHead>
            <TableRow>
              <TableCell>{t.orders.table_columns.items}</TableCell>
              <TableCell align="right">
                {t.orders.table_columns.quantity}
              </TableCell>
              <TableCell align="right">
                {t.orders.table_columns.price}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order.items.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Typography variant="h6">
                    {row.name.toLocaleUpperCase()}
                  </Typography>
                  <Typography variant="caption">
                    {row.choices.map((choice, index) => (
                      <div key={index}>{choice}</div>
                    ))}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">
                    {row.quantity}
                    {t.orders.quantity_x}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">
                    ${((row.quantity * row.price) / 100).toFixed(2)}
                  </Typography>
                  {row.customerRequest ? (
                    <Typography variant="caption">
                      {row.customerRequest}
                    </Typography>
                  ) : null}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div
          style={{
            borderTop: `1px solid ${Colors.GREY['200']}`,
            padding: 8
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Typography variant="subtitle1">
              {t.orders.service_charge}
            </Typography>
            <Typography variant="subtitle1">
              ${(order.serviceCharge / 100).toFixed(2)}
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Typography variant="subtitle1">{t.orders.tip}</Typography>
            <Typography variant="subtitle1">
              ${(order.additionalTip / 100).toFixed(2)}
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Typography variant="h6">
              {t.orders.total.toLocaleUpperCase()}
            </Typography>
            <Typography variant="h6">
              ${(order.totalPrice / 100).toFixed(2)}
            </Typography>
          </div>
        </div>
      </TableContainer>
    </Card>
  </div>
)

export default ReceiptTile
