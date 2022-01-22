import { Typography } from '@mui/material'
import React from 'react'

interface DestructiveButtonProps {
  text: string
  onClick: () => void
  style?: React.CSSProperties
}

const DestructiveButton = ({
  text,
  onClick,
  style
}: DestructiveButtonProps) => (
  <Typography
    onClick={onClick}
    color="textSecondary"
    variant="subtitle2"
    sx={{
      cursor: 'pointer',
      p: 1,
      ':hover': {
        backgroundColor: '#FEE2E1',
        color: '#EF4444'
      }
    }}
    style={style}
  >
    {text}
  </Typography>
)

export default DestructiveButton
