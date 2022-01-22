import { Create } from '@mui/icons-material'
import { Button, IconButton, Typography } from '@mui/material'
import React from 'react'

import Colors from '../../assets/colors'

interface MenuHeaderProps {
  name: string
  isMain?: boolean
  hasIcon?: boolean
  buttonText: string
  onClick?: () => void
  onButtonClick: () => void
}

const MenuHeader = ({
  name,
  isMain,
  hasIcon,
  buttonText,
  onClick,
  onButtonClick
}: MenuHeaderProps) => {
  // const [checked, setChecked] = useState(false);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        padding: 16
      }}
    >
      <div
        onClick={onClick}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: onClick ? 'pointer' : 'default'
        }}
      >
        <Typography variant="h6" color="primary" sx={{ pl: 1 }}>
          {name}
        </Typography>
        {hasIcon ? (
          <IconButton>
            <Create fontSize="small" />
          </IconButton>
        ) : null}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {/*<div style={{*/}
        {/*  display: 'flex',*/}
        {/*  justifyContent: 'center',*/}
        {/*  alignItems: 'center',*/}
        {/*}}>*/}
        {/*  <Typography sx={{ mr: 1 }} variant='subtitle2' color={Colors.GREY['400']}>*/}
        {/*    {checked ? 'Collapse Categories' : 'Expand Categories'}*/}
        {/*  </Typography>*/}
        {/*  <Switch*/}
        {/*    color='primary'*/}
        {/*    checked={checked}*/}
        {/*    onChange={() => {*/}
        {/*      setChecked(!checked);*/}
        {/*    }}*/}
        {/*    edge='start'*/}
        {/*    name='isCollapsed'*/}
        {/*  />*/}
        {/*</div>*/}
        <Button
          onClick={onButtonClick}
          variant={isMain ? 'contained' : 'outlined'}
          color={isMain ? 'primary' : 'secondary'}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default MenuHeader
