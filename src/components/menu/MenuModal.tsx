import { yupResolver } from '@hookform/resolvers/yup'
// import { MenuBook } from '@mui/icons-material';
import { DeleteForever } from '@mui/icons-material'
import {
  alpha,
  Avatar,
  Backdrop,
  Box,
  Button,
  Container,
  Fade,
  Grid,
  Modal,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

import useMenu from '../../hooks/api/menus/useMenu'
import t from '../../locales/en/translations.json'
import { getError } from '../../utils/forms'
import DescriptionInput from './DescriptionInput'
import ImageInput from './ImageInput'
import NameInput from './NameInput'
import PriceInput from './PriceInput'

interface CreateMenuModalProps {
  open: boolean
  onClose: () => void
  header: string
  buttonText: string
  namePlaceholderText?: string
  isDestructive?: boolean
  isMenu?: boolean // hides price
  isCategory?: boolean // hides price and banner image
}

export const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  backgroundColor: 'white',
  borderRadius: 8,
  transform: 'translate(-50%, -50%)',
  padding: 8 * 3
}

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string()
})

const MenuModal = ({
  open,
  onClose,
  header,
  buttonText,
  namePlaceholderText,
  isDestructive,
  isMenu,
  isCategory
}: CreateMenuModalProps) => {
  const [price, setValue] = useState('')

  const { onAdd } = useMenu()

  const methods = useForm({
    defaultValues: {
      name: '',
      description: '',
      available: false,
      file: null
    },
    resolver: yupResolver(validationSchema)
  })

  const handleSubmit = (values: any) => {
    onAdd(values, onClose)
  }

  const { errors } = methods.formState

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      disableAutoFocus={true}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <Container
          maxWidth="sm"
          style={style}
          sx={{ overflowY: 'auto', width: isCategory ? 400 : 600 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Typography color="textPrimary" variant="h5">
              {header}
            </Typography>
            <form onSubmit={(event) => event.preventDefault()}>
              <Grid container>
                <NameInput
                  error={getError(errors, 'name')}
                  placeholderText={namePlaceholderText}
                  {...methods.register('name')}
                />
                <DescriptionInput
                  error={getError(errors, 'description')}
                  {...methods.register('description')}
                />
                {!isMenu && !isCategory ? (
                  <Grid item xs={12} lg={12} sx={{ display: 'flex' }}>
                    <PriceInput
                      value={price}
                      setValue={(newPrice) => {
                        if (newPrice) setValue(newPrice)
                      }}
                    />
                  </Grid>
                ) : null}
                {!isCategory ? (
                  <Controller
                    name="file"
                    control={methods.control}
                    render={({ field: { name, value } }) => (
                      <ImageInput
                        file={value}
                        onChange={(file) => methods.setValue(name, file)}
                      />
                    )}
                  />
                ) : null}
              </Grid>
              <Box
                sx={{
                  display: 'flex',
                  mt: 4
                }}
              >
                {isDestructive ? (
                  <div
                    onClick={() => {}}
                    style={{
                      paddingRight: 8,
                      cursor: 'pointer'
                    }}
                  >
                    <Avatar
                      sx={{
                        backgroundColor: (theme) =>
                          alpha(theme.palette.error.main, 0.08),
                        color: 'error.main'
                      }}
                    >
                      <DeleteForever />
                    </Avatar>
                  </div>
                ) : null}
                <Button
                  color="primary"
                  fullWidth
                  size="large"
                  sx={{ mr: 2 }}
                  variant="outlined"
                  onClick={onClose}
                >
                  {t.common.cancel}
                </Button>
                <Button
                  color="primary"
                  fullWidth
                  size="large"
                  variant="contained"
                  onClick={() => methods.handleSubmit(handleSubmit)()}
                >
                  {buttonText}
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </Fade>
    </Modal>
  )
}

export default MenuModal
