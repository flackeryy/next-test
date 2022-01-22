import { Grid, TextField, Typography } from '@mui/material'
import { ChangeEvent, forwardRef } from 'react'

import t from '../../locales/en/translations.json'
import FormLabel from '../FormLabel'

interface NameInputProps {
  label?: string
  description?: string
  placeholderText?: string
  optional?: boolean
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  error?: string
}

const NameInput = forwardRef(
  (
    {
      label,
      description,
      placeholderText,
      optional,
      value,
      onChange,
      error,
      ...props
    }: NameInputProps,
    ref
  ) => (
    <Grid item xs={12} lg={12}>
      <FormLabel
        text={label || t.menus.create_menu_modal.name}
        optional={optional}
      />
      {description ? (
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {description}
        </Typography>
      ) : null}
      <TextField
        fullWidth
        ref={ref as any}
        placeholder={
          placeholderText || t.menus.create_menu_modal.name_placeholder
        }
        name="name"
        required={!optional}
        variant="outlined"
        value={value}
        onChange={onChange}
        error={!!error}
        helperText={error}
        {...props}
      />
    </Grid>
  )
)

export default NameInput
