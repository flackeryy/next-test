import { Switch } from '@mui/material'
import * as React from 'react'

import t from '../../locales/en/translations.json'
import FormLabel from '../FormLabel'

const AvailabilityTab = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    <FormLabel text={t.tabs_drawer.availability.always_available_option_text} />
    <Switch color="primary" edge="start" name="always-available" />
  </div>
)

export default AvailabilityTab
