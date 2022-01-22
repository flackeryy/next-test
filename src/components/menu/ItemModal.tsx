import { MenuBook } from '@mui/icons-material'
import { DeleteForever } from '@mui/icons-material'
import {
  alpha,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography
} from '@mui/material'
import React from 'react'

import t from '../../locales/en/translations.json'
import DescriptionInput from './DescriptionInput'
import ImageInput from './ImageInput'
import NameInput from './NameInput'

// TODO WIP: wrap everything inside EditProductDrawer and expose it to ItemModal as a child component.
//  Also look into wrapping everything inside the drawer to reuse between Product and Category drawers.

interface CreateItemModalProps {
  header: string
  buttonText: string
  isDestructive?: boolean
}

const ItemModal = ({
  header,
  buttonText,
  isDestructive
}: CreateItemModalProps) => (
  <Box
    sx={{
      backgroundColor: 'background.default',
      minHeight: '100%',
      p: 3
    }}
  >
    <Container maxWidth="sm">
      <Paper elevation={12} sx={{ p: 3 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar
            sx={{
              backgroundColor: (theme) =>
                alpha(theme.palette.success.main, 0.08),
              color: 'success.main',
              mb: 2
            }}
          >
            <MenuBook />
          </Avatar>
          <Typography color="textPrimary" variant="h5">
            {header}
          </Typography>
          <form onSubmit={(event) => event.preventDefault()}>
            <Grid container spacing={3}>
              <NameInput />
              <DescriptionInput />
              <ImageInput />
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
              >
                {t.common.cancel}
              </Button>
              <Button
                color="primary"
                fullWidth
                size="large"
                variant="contained"
              >
                {buttonText}
              </Button>
            </Box>
          </form>
        </Box>
      </Paper>
    </Container>
  </Box>
)

export default ItemModal
