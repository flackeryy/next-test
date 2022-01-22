import { Typography } from '@mui/material'
import React from 'react'

import Colors from '../assets/colors'

interface HeaderProps {
  name: string
}

const Header = ({ name }: HeaderProps) => {
  // const [checked, setChecked] = useState(false);
  // const router = useRouter();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        padding: 16,
        minHeight: 68 // based off MenuHeader
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer'
        }}
      >
        <Typography variant="h6" color="primary" sx={{ pl: 1 }}>
          {name}
        </Typography>
      </div>
    </div>
  )
}

export default Header
