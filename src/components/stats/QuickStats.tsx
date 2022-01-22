import { Box, Grid } from '@mui/material'
import React from 'react'

import t from '../../locales/en/translations.json'
import StatTile, { StateTileProps } from './StatTile'

const statsList: StateTileProps[] = [
  {
    title: t.dashboard.total_sales,
    value: '$1,402.20'
  },
  {
    title: t.dashboard.total_orders,
    value: 35
  },
  {
    title: t.dashboard.avg_order_value,
    value: '$40.06'
  },
  {
    title: t.dashboard.open_orders,
    value: 7
  }
]

const QuickStats = () => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      p: 3
    }}
  >
    <Grid container spacing={3}>
      {statsList.map((stat, index) => (
        <StatTile key={index} title={stat.title} value={stat.value} />
      ))}
    </Grid>
  </Box>
)

export default QuickStats
