import { Grid, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, forwardRef } from 'react'

import t from '../../locales/en/translations.json'
import FormLabel from '../FormLabel'

interface DescriptionInputProps {
  isShort?: boolean
  label?: string
  description?: string
  placeholderText?: string
  disclaimerText?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  error?: string
}

const DescriptionInput = forwardRef(
  (
    {
      isShort,
      label,
      description,
      placeholderText,
      disclaimerText,
      value,
      onChange,
      error,
      ...props
    }: DescriptionInputProps,
    ref
  ) => (
    <Grid item xs={isShort ? 8 : 12}>
      <FormLabel text={label || t.menus.create_menu_modal.description} />
      {description ? (
        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
          {description}
        </Typography>
      ) : null}
      <TextField
        fullWidth
        ref={ref as any}
        placeholder={
          placeholderText || t.menus.create_menu_modal.description_placeholder
        }
        name="message"
        required
        multiline
        rows={2}
        variant="outlined"
        value={value}
        onChange={onChange}
        error={!!error}
        helperText={error}
        {...props}
      />
      {disclaimerText ? (
        <Typography variant="caption" color="textSecondary">
          {disclaimerText}
        </Typography>
      ) : null}
    </Grid>
  )
)

export default DescriptionInput
