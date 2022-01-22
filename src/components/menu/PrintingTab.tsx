import { PrintDisabled } from '@mui/icons-material'
import { Typography } from '@mui/material'
import * as React from 'react'

import t from '../../locales/en/translations.json'

const PrintingTab = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <PrintDisabled fontSize="large" />
    <Typography color="textPrimary" variant="subtitle2" sx={{ mt: 1, mb: 1 }}>
      {t.tabs_drawer.printing.title}
    </Typography>
    <Typography color="textSecondary" variant="body2" sx={{ mb: 1 }}>
      {t.tabs_drawer.printing.description}
    </Typography>
  </div>
)

export default PrintingTab
