import { Grid, Switch } from '@mui/material'
import * as React from 'react'

import t from '../../locales/en/translations.json'
import FormLabel from '../FormLabel'

const SwitchesSection = () => (
  <Grid item xs={12} lg={6}>
    <FormLabel text={t.tabs_drawer.details.highlight_switch_text} />
    <Switch color="primary" edge="start" name="isPopular" />
    <FormLabel text={t.tabs_drawer.details.track_inventory_switch_text} />
    <Switch color="primary" edge="start" name="isInventoryTracked" />
  </Grid>
)
export default SwitchesSection
