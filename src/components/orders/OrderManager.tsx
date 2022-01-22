import * as React from 'react'
import { useEffect, useState } from 'react'

import Colors from '../../assets/colors'
import { Customer, customers, Order } from '../../models/Orders'
import CustomerCard from './CustomerCard'
import ReceiptTile from './ReceiptTile'
import SelectableOrderTile from './SelectableOrderTile'

interface OrderManagerProps {
  ordersList: Order[]
}

const OrderManager = ({ ordersList }: OrderManagerProps) => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  )

  const getCustomerById = (
    customersList: Customer[],
    customerId: string
  ): Customer | undefined => {
    return customersList.find((customer) => customer.id === customerId)
  }

  useEffect(() => {
    if (selectedOrder !== null) {
      const selectedCustomer = getCustomerById(
        customers,
        selectedOrder.customerId
      )
      if (selectedCustomer) setSelectedCustomer(selectedCustomer)
    }
  }, [selectedOrder])

  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: Colors.WHITE,
        overflowY: 'auto'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', minWidth: 200 }}>
        {ordersList.map((order, index) => {
          const customer = getCustomerById(customers, order.customerId)
          if (customer !== undefined)
            return (
              <SelectableOrderTile
                key={index}
                order={order}
                customer={customer}
                isSelected={selectedOrder?.id === order.id}
                onClick={() => {
                  setSelectedOrder(order)
                }}
              />
            )
        })}
      </div>
      <div
        style={{
          display: 'flex',
          padding: 8,
          overflowY: 'auto',
          width: '100%',
          backgroundColor: Colors.GREY['100']
        }}
      >
        {selectedOrder !== null && selectedCustomer !== null ? (
          <div style={{ display: 'flex' }}>
            <ReceiptTile order={selectedOrder} customer={selectedCustomer} />
            <CustomerCard customer={selectedCustomer} />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default OrderManager
