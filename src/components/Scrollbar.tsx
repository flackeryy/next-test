import { Box } from '@mui/material'
import { forwardRef } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

const Scrollbar = forwardRef(({ children }: { children: JSX.Element }, ref) => {
  const isMobile =
    typeof window !== 'undefined' &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )

  if (isMobile) {
    return (
      <Box ref={ref} sx={{ overflowX: 'auto' }}>
        {children}
      </Box>
    )
  }

  return (
    <PerfectScrollbar
      // @ts-ignore
      ref={ref}
    >
      {children}
    </PerfectScrollbar>
  )
})

export default Scrollbar
