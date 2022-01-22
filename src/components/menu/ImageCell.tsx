import { Image as ImageIcon } from '@mui/icons-material'
import { Box, Link, TableCell } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface ImageCellProps {
  image: string | null
  name: string
}

const size = 50

const ImageCell = ({ image, name }: ImageCellProps) => (
  <TableCell width="25%">
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex'
      }}
    >
      {image ? (
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: 'background.default',
            display: 'flex',
            height: size,
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
            width: size
          }}
        >
          <Image key={image} alt="Product" src={image} layout="fill" />
        </Box>
      ) : (
        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: 'background.default',
            display: 'flex',
            height: size,
            justifyContent: 'center',
            width: size
          }}
        >
          <ImageIcon fontSize="small" />
        </Box>
      )}
      <Link
        color="textPrimary"
        underline="none"
        sx={{ ml: 2 }}
        variant="subtitle2"
      >
        {name}
      </Link>
    </Box>
  </TableCell>
)

export default ImageCell
