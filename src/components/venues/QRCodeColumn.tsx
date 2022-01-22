import { Button, Grid, Link, Typography } from '@mui/material'
import Qr from 'components/qr/Qr'
import t from 'locales/en/translations.json'

import DestructiveButton from './DestructiveButton'

const classes: any = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 8
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',

    '& button': {
      marginRight: '0.75rem'
    }
  },
  link: { textAlign: 'center', mr: 16, ml: 16, mb: 2 },
  name: { p: 1 }
}

interface QRCodeColumnProps {
  url: string
  tableName: string
  onDeleteTable: () => void
  onDownload: () => void
}

function QRCodeColumn({
  url,
  tableName,
  onDeleteTable,
  onDownload
}: QRCodeColumnProps) {
  return (
    <div style={classes.root}>
      <div style={classes.container}>
        <Typography color="primary" variant="subtitle2" sx={classes.name}>
          {tableName}
        </Typography>

        <Grid sx={classes.buttons}>
          <Button onClick={onDownload}>Download</Button>
          <DestructiveButton text={t.common.delete} onClick={onDeleteTable} />
        </Grid>
      </div>

      <Link
        href={url}
        target="_blank"
        variant="caption"
        color="textSecondary"
        sx={classes.link}
      >
        {url}
      </Link>

      <div>
        <Qr url={url} size={128} />
      </div>
    </div>
  )
}

export default QRCodeColumn
