import { CircularProgress, Grid } from '@mui/material'

const classes = {
  root: {
    padding: '1.25rem 0.5rem',
    display: 'flex',
    justifyContent: 'center'
  }
}

export default function LoadingPlaceholder() {
  return (
    <Grid container sx={classes.root}>
      <CircularProgress />
    </Grid>
  )
}
