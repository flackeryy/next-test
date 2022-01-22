import { Warning } from '@mui/icons-material'
import { alpha, Avatar, Typography } from '@mui/material'
import * as React from 'react'

interface DeleteTabProps {
  description: string
}

const DeleteTab = ({ description }: DeleteTabProps) => (
  <>
    <Avatar
      sx={{
        backgroundColor: (theme) => alpha(theme.palette.error.main, 0.08),
        color: 'error.main',
        mr: 2,
        mb: 2
      }}
    >
      <Warning />
    </Avatar>
    <Typography color="textSecondary" variant="body2" sx={{ mb: 1 }}>
      {description}
    </Typography>
  </>
)

export default DeleteTab
