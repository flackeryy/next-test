import { TextField } from '@mui/material'
import * as React from 'react'

import t from '../../locales/en/translations.json'
import FormLabel from '../FormLabel'

const SKUInput = () => (
  <div>
    <FormLabel text={t.menus.create_menu_modal.sku} />
    <TextField
      placeholder={t.menus.create_menu_modal.sku_placeholder}
      name="name"
      variant="outlined"
    />
  </div>
)

export default SKUInput
