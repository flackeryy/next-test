import { Grid } from '@mui/material'
import React from 'react'

import t from '../../locales/en/translations.json'
import FormLabel from '../FormLabel'
import UploadImageSection from './UploadImageSection'

interface ImageInputProps {
  file?: any
  onChange?: (file: any) => void
}

const ImageInput = ({ file, onChange }: ImageInputProps) => (
  <Grid item xs={12}>
    <FormLabel text={t.menus.create_menu_modal.banner_image} />
    <UploadImageSection file={file} onChange={onChange} />
  </Grid>
)

export default ImageInput
