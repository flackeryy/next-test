import { yupResolver } from '@hookform/resolvers/yup'
import {
  Backdrop,
  Box,
  Button,
  Container,
  Fade,
  Grid,
  Modal,
  Typography
} from '@mui/material'
import useProduct from 'hooks/api/products/useProduct'
import useProducts from 'hooks/api/products/useProducts'
import t from 'locales/en/translations.json'
import max from 'lodash.max'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { getError } from 'utils/forms'
import * as yup from 'yup'

import DescriptionInput from './DescriptionInput'
import ImageInput from './ImageInput'
import NameInput from './NameInput'
import PriceInput from './PriceInput'

interface ProductModalProps {
  open: boolean
  onClose: () => void
  categoryId: number
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

const ProductModal = ({ open, onClose, categoryId }: ProductModalProps) => {
  const { onAdd } = useProduct()

  const methods = useForm({
    defaultValues: {
      name: '',
      description: '',
      available: true,
      popular: true,
      price: 0,
      category: null,
      file: null,
      sort_order: 0
    },
    resolver: yupResolver(validationSchema)
  })

  const { products } = useProducts({ categoryId: categoryId })

  const nextSort = max(products.map((p) => p.sort_order)) + 1 || 0

  useEffect(() => {
    methods.setValue('category', categoryId as any)
  }, [categoryId])

  useEffect(() => {
    methods.setValue('sort_order', nextSort)
  }, [nextSort])

  useEffect(() => {
    methods.setValue('category', categoryId as any)
  }, [categoryId])

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
          sx={{ overflowY: 'auto', width: 600 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Typography color="textPrimary" variant="h5">
              {t.common.create_product}
            </Typography>
            <form onSubmit={(event) => event.preventDefault()}>
              <Grid container>
                <NameInput
                  error={getError(errors, 'name')}
                  placeholderText={t.tabs_drawer.details.name_placeholder_text}
                  {...methods.register('name')}
                />
                <DescriptionInput
                  error={getError(errors, 'description')}
                  {...methods.register('description')}
                />
                <Grid item xs={12} lg={12} sx={{ display: 'flex' }}>
                  <Controller
                    render={({ field: { value, name } }) => (
                      <PriceInput
                        value={String(value)}
                        setValue={(newPrice) => {
                          methods.setValue(name, (newPrice as any) || 0)
                        }}
                      />
                    )}
                    control={methods.control}
                    name="price"
                  />
                </Grid>

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
              </Grid>
              <Box
                sx={{
                  display: 'flex',
                  mt: 4
                }}
              >
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
                  {t.common.create}
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </Fade>
    </Modal>
  )
}

export default ProductModal
