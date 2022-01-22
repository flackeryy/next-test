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
import useTable from 'hooks/api/venus/useTable'
import t from 'locales/en/translations.json'
import React from 'react'
import { useForm } from 'react-hook-form'
import { getError } from 'utils/forms'
import * as yup from 'yup'

import { style } from '../menu/MenuModal'
import NameInput from '../menu/NameInput'

interface AddTableModalProps {
  areaId: number
  open: boolean
  onClose: () => void
}

const validationSchema = yup.object().shape({
  name: yup.string().required()
})

const AddTableModal = ({ areaId, open, onClose }: AddTableModalProps) => {
  const table = useTable()

  const methods = useForm({
    defaultValues: {
      name: ''
    },
    resolver: yupResolver(validationSchema)
  })

  const handleSubmit = (values: any) => {
    table.onAdd(areaId, values, () => {
      methods.reset()
      onClose()
    })
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
        <Container maxWidth="sm" style={style}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Typography color="textPrimary" variant="h6">
              {t.venue.add_table_modal.header}
            </Typography>
            <form onSubmit={(event) => event.preventDefault()}>
              <Grid container spacing={3}>
                <NameInput
                  placeholderText={t.venue.add_table_modal.placeholder_text}
                  error={getError(errors, 'name')}
                  {...methods.register('name')}
                />
              </Grid>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  mt: 4
                }}
              >
                <Button
                  color="secondary"
                  size="large"
                  sx={{ mr: 2 }}
                  variant="outlined"
                  onClick={onClose}
                >
                  {t.common.close}
                </Button>
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  onClick={() => methods.handleSubmit(handleSubmit)()}
                >
                  {t.venue.add_table_modal.button_text}
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </Fade>
    </Modal>
  )
}

export default AddTableModal
