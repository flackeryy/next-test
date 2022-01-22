import { Box, Button } from '@mui/material'
import * as React from 'react'

import t from '../../locales/en/translations.json'

interface ModifierButtonsSectionProps {
  config: {
    ctaBtnText?: string
    ctaOnClick: () => void
    secondaryBtnText?: string
    secondaryOnClick: () => void
    ctaBtnDestructive?: boolean
  }
}

const ModifierButtonsSection = ({
  config: {
    ctaBtnText = t.common.save,
    ctaOnClick,
    secondaryBtnText = t.common.close,
    secondaryOnClick,
    ctaBtnDestructive = false
  }
}: ModifierButtonsSectionProps) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      py: 1.5
    }}
  >
    <Button
      onClick={() => {
        ctaOnClick()
      }}
      sx={{
        backgroundColor: ctaBtnDestructive ? 'error.main' : 'secondary',
        '&:hover': {
          backgroundColor: ctaBtnDestructive ? 'error.dark' : 'secondary'
        }
      }}
      variant="contained"
    >
      {ctaBtnText}
    </Button>
    <Button onClick={secondaryOnClick} color="secondary" variant="outlined">
      {secondaryBtnText}
    </Button>
  </Box>
)

export default ModifierButtonsSection
