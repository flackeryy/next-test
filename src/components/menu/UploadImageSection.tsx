import { UploadFile } from '@mui/icons-material'
import { Button, Grid, Typography } from '@mui/material'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import Colors from '../../assets/colors'
import t from '../../locales/en/translations.json'

interface UploadImageSectionProps {
  file?: any
  onChange?: (file: any) => void
}

const UploadImageSection = ({ file, onChange }: UploadImageSectionProps) => {
  const onDrop = useCallback((acceptedFiles) => {
    onChange?.(acceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        // cursor: 'pointer',
        border: `1px dashed ${Colors.LIME['300']}`,
        padding: 8,
        borderRadius: 8
      }}
    >
      <UploadFile color="primary" sx={{ m: 1 }} />

      <Grid
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Button variant="contained" sx={{ my: 1 }} {...getRootProps()}>
          <input {...getInputProps()} />
          Upload file
        </Button>

        {file && <p>{typeof file === 'string' ? file : file.name}</p>}
      </Grid>

      {/*<Widget*/}
      {/*  publicKey={UPLOAD_CARE_CONFIG as string}*/}
      {/*  tabs='file url facebook gdrive gphotos dropbox instagram onedrive'*/}
      {/*  imagesOnly*/}
      {/*  previewStep*/}
      {/*  crop='1:1' // free, 16:9, 4:3, 5:4,*/}
      {/*  effects={['crop, rotate']}*/}
      {/*  clearable*/}
      {/*  validators={validators}*/}
      {/*  localeTranslations={errors}*/}
      {/*  onFileSelect={e => console.log('onFileSelect:', e)}*/}
      {/*  onChange={info => console.log('Upload completed:', info)}*/}
      {/*/>*/}
      <Typography
        color={Colors.GREY['400']}
        sx={{ m: 1, whiteSpace: 'pre-line' }}
        display="inline"
        variant="subtitle2"
      >
        {t.menus.create_menu_modal.image_placeholder2}
      </Typography>
    </div>
  )
}

export default UploadImageSection
