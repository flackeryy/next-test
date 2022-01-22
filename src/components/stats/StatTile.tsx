import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'

export interface StateTileProps {
  title: string
  value: number | string
}

const StatTile = ({ title, value }: StateTileProps) => (
  <Grid item xs={12} md={6} lg={3}>
    <Card
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        p: 3
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography color="textSecondary" gutterBottom variant="overline">
          {title}
        </Typography>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          <Typography color="textPrimary" sx={{ mr: 1 }} variant="h5">
            {value}
          </Typography>
        </Box>
      </Box>
    </Card>
  </Grid>
)

export default StatTile
