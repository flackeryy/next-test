import { Button } from '@mui/material'
import React from 'react'

import Colors from '../../assets/colors'
import t from '../../locales/en/translations.json'

const AddProductFullWidthButton = ({ onClick }: { onClick?: () => void }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      margin: 8,
      padding: 8
    }}
  >
    <Button
      onClick={onClick}
      color="primary"
      size="large"
      sx={{
        mr: 3,
        border: `2px dashed ${Colors.LIME['500']}`,
        opacity: 0.6,
        ':hover': {
          opacity: 1
        }
      }}
    >
      {t.common.create_product}
    </Button>
  </div>
)

export default AddProductFullWidthButton
