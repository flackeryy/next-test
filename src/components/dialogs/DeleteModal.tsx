import { Warning } from '@mui/icons-material'
import {
  alpha,
  Avatar,
  Backdrop,
  Box,
  Button,
  Container,
  Fade,
  Modal,
  Typography
} from '@mui/material'
import t from 'locales/en/translations.json'

import { style } from '../menu/MenuModal'

interface DeleteModalProps {
  open: boolean
  header: string
  description: string
  buttonText: string
  onClose: () => void
  onCta: () => void
}

const DeleteModal = ({
  open,
  header,
  description,
  buttonText,
  onClose,
  onCta
}: DeleteModalProps) => (
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
            pb: 2,
            pt: 3,
            px: 3
          }}
        >
          <Avatar
            sx={{
              backgroundColor: (theme) => alpha(theme.palette.error.main, 0.08),
              color: 'error.main',
              mr: 2
            }}
          >
            <Warning />
          </Avatar>
          <Box>
            <Typography color="textPrimary" variant="h5">
              {header}
            </Typography>
            <Typography color="textSecondary" sx={{ mt: 1 }} variant="body2">
              {description}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            px: 3,
            py: 1.5
          }}
        >
          <Button
            color="secondary"
            sx={{ mr: 2 }}
            variant="outlined"
            onClick={onClose}
          >
            {t.common.cancel}
          </Button>
          <Button
            sx={{
              backgroundColor: 'error.main',
              '&:hover': {
                backgroundColor: 'error.dark'
              }
            }}
            variant="contained"
            onClick={onCta}
          >
            {buttonText}
          </Button>
        </Box>
      </Container>
    </Fade>
  </Modal>
)

export default DeleteModal
