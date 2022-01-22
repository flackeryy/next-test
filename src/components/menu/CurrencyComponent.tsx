import { Typography } from '@mui/material'
import React from 'react'
import CurrencyInput from 'react-currency-input-field'

import t from '../../locales/en/translations.json'

export const CurrencyComponent = ({
  value,
  setValue,
  maxWidth
}: {
  value: string
  setValue: (value: string | undefined) => void
  maxWidth?: number
}) => (
  <div style={{ position: 'relative', maxWidth }}>
    <Typography
      color="textSecondary"
      variant="subtitle2"
      style={{ position: 'absolute', top: 18, left: 8 }}
    >
      {t.menus.create_menu_modal.currency_sign}
    </Typography>
    <CurrencyInput
      disableAbbreviations
      id="price-input"
      className="price-input"
      name="price-name"
      placeholder="0.00"
      value={value}
      allowNegativeValue={false}
      style={{ maxWidth }}
      onValueChange={(value: string | undefined) => setValue(value)}
    />
    <Typography
      color="textSecondary"
      variant="subtitle2"
      style={{ position: 'absolute', top: 18, right: 8 }}
    >
      {t.menus.create_menu_modal.currency}
    </Typography>
  </div>
)

export default CurrencyComponent
