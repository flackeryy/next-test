import { KeyboardArrowRight } from '@mui/icons-material'
import { Chip, Typography } from '@mui/material'
import React from 'react'

import Colors from '../../assets/colors'

interface CellProps {
  text: string
  isSelected: boolean
  onClick: () => void
  hasChip?: boolean
  chipText?: string
  style?: React.CSSProperties
}

const Cell = ({
  text,
  onClick,
  chipText,
  hasChip,
  isSelected,
  style
}: CellProps) => (
  <div
    style={Object.assign(
      {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: isSelected ? Colors.GREY['100'] : Colors.WHITE,
        cursor: 'pointer',
        padding: 16
      },
      style
    )}
    onClick={onClick}
  >
    <Typography color="textPrimary" sx={{ mr: 1 }} variant="body1">
      {text}
    </Typography>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {hasChip ? <Chip label={chipText} color="primary" size="small" /> : null}
      <KeyboardArrowRight />
    </div>
  </div>
)

export default Cell
