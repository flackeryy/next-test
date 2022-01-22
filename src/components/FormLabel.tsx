import { Typography } from '@mui/material'
import React from 'react'

import Colors from '../assets/colors'
import t from '../locales/en/translations.json'

const FormLabel = ({
  text,
  style,
  optional,
  isHeader
}: {
  text: string
  style?: React.CSSProperties
  optional?: boolean
  isHeader?: boolean
}) => (
  <Typography
    color="textPrimary"
    sx={{ mt: 1, mb: 1 }}
    variant={isHeader ? 'body1' : 'subtitle2'}
    style={style}
  >
    {text}
    {optional ? (
      <span style={{ color: Colors.GREY['500'] }}>{t.common.optional}</span>
    ) : null}
  </Typography>
)

export default FormLabel
