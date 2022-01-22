import { IconButton } from '@mui/material'
import React from 'react'

import Colors from '../../assets/colors'

interface CircularQuantityButtonProps {
  disabled: boolean
  onClick: () => void
  ariaLabel: string
  icon: React.ReactElement
}

const CircularQuantityButton = ({
  disabled,
  onClick,
  ariaLabel,
  icon
}: CircularQuantityButtonProps) => (
  <IconButton
    disabled={disabled}
    onClick={onClick}
    aria-label={ariaLabel}
    style={{
      backgroundColor: disabled ? Colors.WHITE : Colors.LIME['500'],
      border: `1px solid ${disabled ? Colors.GREY['300'] : Colors.LIME['500']}`,
      color: disabled ? Colors.GREY['300'] : Colors.WHITE,
      cursor: 'pointer'
    }}
  >
    {icon}
  </IconButton>
)

export default CircularQuantityButton
