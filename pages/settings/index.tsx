import { Box, Grid, Typography } from '@mui/material'
import Colors from 'assets/colors'
import Header from 'components/Header'
import Layout from 'components/layout'
import Link from 'next/link'

const classes = {
  root: {
    padding: '2.5rem'
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '1.25rem',
    backgroundColor: Colors.WHITE,
    p: 3,
    borderRadius: 1
  },
  link: {
    textDecoration: 'none'
  },
  text: {
    fontWeight: 700,
    mb: 1,
    cursor: 'pointer'
  },
  soonText: {
    fontWeight: 700,
    fontSize: '0.875rem',
    color: Colors.PINK['100'],
    pt: 1
  }
}

export default function Settings() {
  return (
    <Layout>
      <Header name={'Settings'} />

      <Grid container sx={classes.root}>
        <Box sx={classes.container}>
          <div>
            <Link href="/settings/general">
              <a style={classes.link}>
                <Typography color="primary" sx={classes.text}>
                  General
                </Typography>
              </a>
            </Link>

            <Typography color="secondary">
              View and update your store details
            </Typography>
          </div>
          <div>
            <Typography color="primary" sx={classes.text}>
              Printing
            </Typography>
            <Typography color="secondary">
              Add connected printers to automatically print new orders
            </Typography>
            <Typography sx={classes.soonText}>Coming Soon!</Typography>
          </div>
          <div>
            <Typography color="primary" sx={classes.text}>
              Payments
            </Typography>
            <Typography color="secondary">
              Enable and manage your payment processing account
            </Typography>
            <Typography sx={classes.soonText}>Coming Soon!</Typography>
          </div>
        </Box>
      </Grid>
    </Layout>
  )
}
