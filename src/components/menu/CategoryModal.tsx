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
import useCategory from 'hooks/api/categories/useCategory'
import t from 'locales/en/translations.json'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { getError } from 'utils/forms'
import * as yup from 'yup'

import DescriptionInput from './DescriptionInput'
import NameInput from './NameInput'

interface CategoryModalProps {
  open: boolean
  onClose: () => void
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

const CategoryModal = ({ open, onClose }: CategoryModalProps) => {
  const router = useRouter()

  const { onAdd } = useCategory()

  const methods = useForm({
    defaultValues: {
      name: '',
      description: '',
      available: true
    },
    resolver: yupResolver(validationSchema)
  })

  const handleSubmit = (values: any) => {
    onAdd(router.query.menuId as string, values, onClose)
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
          sx={{ overflowY: 'auto', width: 400 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Typography color="textPrimary" variant="h5">
              {t.common.create_category}
            </Typography>
            <form onSubmit={(event) => event.preventDefault()}>
              <Grid container>
                <NameInput
                  error={getError(errors, 'name')}
                  placeholderText={t.common.category_name_placeholder_text}
                  {...methods.register('name')}
                />
                <DescriptionInput
                  error={getError(errors, 'description')}
                  {...methods.register('description')}
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

export default CategoryModal
