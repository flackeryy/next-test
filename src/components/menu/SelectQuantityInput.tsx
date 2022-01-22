import { Add, Remove } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React from 'react'

import Colors from '../../assets/colors'
import CircularQuantityButton from './CircularQuantityButton'

const MAX_QUANTITY = 10

interface SelectQuantityInputProps {
  quantity: number
  onAdd: () => void
  onSubtract: () => void
  style?: React.CSSProperties
  disabledMin?: boolean
  disabledMax?: boolean
}

const SelectQuantityInput = ({
  quantity,
  onAdd,
  onSubtract,
  style,
  disabledMax,
  disabledMin
}: SelectQuantityInputProps) => (
  <div
    style={Object.assign(
      {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center'
      },
      style
    )}
  >
    <CircularQuantityButton
      disabled={disabledMin || quantity <= 0}
      onClick={onSubtract}
      ariaLabel="remove"
      icon={<Remove color="inherit" sx={{ fontSize: 12 }} />}
    />
    <Typography
      style={{
        display: 'flex',
        minWidth: '30%',
        fontSize: 12,
        color: Colors.GREY['400'],
        fontWeight: 700,
        justifyContent: 'center'
      }}
    >
      {quantity}
    </Typography>
    <CircularQuantityButton
      disabled={disabledMax || quantity >= MAX_QUANTITY}
      onClick={onAdd}
      ariaLabel="add"
      icon={<Add color="inherit" sx={{ fontSize: 12 }} />}
    />
  </div>
)

export default SelectQuantityInput
