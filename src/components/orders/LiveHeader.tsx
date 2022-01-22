import { Close } from '@mui/icons-material'
import { Switch, Typography } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'

import { PageNames } from '../../../pages/_document'
import Colors from '../../assets/colors'
import t from '../../locales/en/translations.json'

const LiveHeader = () => {
  const [restaurantStatus, setRestaurantStatus] = useState(true)

  // TODO should open a modal which asks merchant to confirm whether they want to stop accepting orders.
  const handleRestaurantStatus = (event: React.ChangeEvent<HTMLInputElement>) =>
    setRestaurantStatus(event.target.checked)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: Colors.WHITE
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: 12 / 2,
            backgroundColor: restaurantStatus
              ? Colors.LIME['500']
              : Colors.GREY['500'],
            margin: 8
          }}
        />
        <Typography variant="h5" sx={{ mr: 1 }}>
          {t.orders.live_orders}
        </Typography>
        <Switch
          checked={restaurantStatus}
          onChange={handleRestaurantStatus}
          color="primary"
          edge="start"
          name="restaurantStatus"
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer'
        }}
        onClick={() => {
          window.location.href = PageNames.ROOT
        }}
      >
        <Typography variant="h6" style={{ paddingRight: 8 }}>
          {t.common.exit}
        </Typography>
        <Close color="inherit" />
      </div>
    </div>
  )
}

export default LiveHeader
