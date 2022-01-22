import { Typography } from '@mui/material'
import React from 'react'

import Colors from '../../assets/colors'

interface TransparentRoundedDashedButtonProps {
  text: string
  onClick: () => void
}

const TransparentRoundedDashedButton = ({
  text,
  onClick
}: TransparentRoundedDashedButtonProps) => (
  <div
    onClick={onClick}
    style={{
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: Colors.WHITE,
      border: `2px dashed ${Colors.GREY['300']}`,
      padding: 8,
      margin: 4,
      borderRadius: 8,
      cursor: 'pointer'
    }}
  >
    <Typography color="primary">{text}</Typography>
  </div>
)

export default TransparentRoundedDashedButton
