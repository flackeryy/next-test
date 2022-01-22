import React from 'react'

import t from '../../locales/en/translations.json'
import FormLabel from '../FormLabel'
import CurrencyComponent from './CurrencyComponent'

interface PriceInputProps {
  value: string
  setValue: (value: string | undefined) => void
}

const PriceInput = ({ value, setValue }: PriceInputProps) => (
  <div>
    <FormLabel text={t.menus.create_menu_modal.price} />
    <CurrencyComponent value={value} setValue={setValue} />
  </div>
)
export default PriceInput
