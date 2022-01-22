import { Email, Phone } from '@mui/icons-material'
import { Card, Typography } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'

import t from '../../locales/en/translations.json'
import { Customer } from '../../models/Orders'

const size = 50

const CustomerCard = ({ customer }: { customer: Customer }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    {/* to compensate for ReceiptTile having a header */}
    <Typography variant="h5" gutterBottom>
      &nbsp;
    </Typography>
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        margin: 8
      }}
    >
      <Typography variant="h6" gutterBottom>
        {t.orders.customer.toLocaleUpperCase()}
      </Typography>
      <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 16 }}>
        <div
          style={{
            height: size,
            width: size,
            borderRadius: size / 2,
            marginRight: 8
          }}
        >
          <Image
            priority
            className="border-circular"
            src={
              customer.image ||
              'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
            }
            alt="customer image"
            width={size}
            height={size}
          />
        </div>
        <Typography variant="subtitle1">{customer.name}</Typography>
        {/*<Link color='secondary'>{customer.totalOrderCount} {t.orders.orders}</Link>*/}
      </div>
      <Typography
        variant="body1"
        color="textSecondary"
        fontWeight={700}
        gutterBottom
      >
        {t.orders.contact_info}
      </Typography>
      <div
        style={{ display: 'flex', cursor: 'pointer', paddingBottom: 8 }}
        onClick={() => {
          window.location.href = `tel:${customer.phoneNumber}`
        }}
      >
        <Phone color="secondary" />
        <Typography color="textSecondary" sx={{ ml: 1 }} gutterBottom>
          {customer.phoneNumber}
        </Typography>
      </div>
      <div
        style={{ display: 'flex', cursor: 'pointer' }}
        onClick={() => {
          window.location.href = `mailto:${customer.email}`
        }}
      >
        <Email color="secondary" />
        <Typography color="textSecondary" sx={{ ml: 1 }} gutterBottom>
          {customer.email}
        </Typography>
      </div>
    </Card>
  </div>
)

export default CustomerCard
