import {
  EventNote,
  ExpandMore,
  Home,
  MoveToInbox,
  Room,
  Settings
} from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'
import Colors from 'assets/colors'
import { logo } from 'assets/generalAssets'
import t from 'locales/en/translations.json'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as React from 'react'

import { PageNames } from '../../pages/_document'
import useAuth from '../hooks/api/auth/useAuth'
import ProfileMenu from './ProfileMenu'

const drawerWidth = 270
const size = 40

interface MenuOption {
  href: PageNames
  name: string
  icon: any
  subMenu?: MenuOption[]
}

const mainMenuItems: MenuOption[] = [
  { href: PageNames.ROOT, name: t.menu.dashboard, icon: <Home /> },
  {
    href: PageNames.ORDERS,
    name: t.menu.orders,
    icon: <MoveToInbox />,
    subMenu: [
      {
        href: PageNames.LIVE_ORDERS,
        name: 'Live Orders',
        icon: null
      },
      {
        href: PageNames.ORDERS,
        name: 'Order History',
        icon: null
      }
    ]
  },
  { href: PageNames.VENUE, name: t.menu.venue, icon: <Room /> },
  { href: PageNames.MENUS, name: t.menu.menus, icon: <EventNote /> }
]
const subMenuItems: MenuOption[] = [
  { href: PageNames.SETTINGS, name: t.menu.settings, icon: <Settings /> }
]

interface LayoutProps {
  children: any
}

const classes: any = {
  userRow: {
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: drawerWidth,
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    backgroundColor: Colors.GREY['50'],
    cursor: 'pointer'
  }
}

const Layout = ({ children }: LayoutProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const onProfileClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget)
  const onProfileClose = () => setAnchorEl(null)
  const router = useRouter()

  const auth = useAuth()

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{ display: 'flex', width: drawerWidth }}
        variant="permanent"
        anchor="left"
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 8 * 3,
            paddingBottom: 8 * 3,
            width: drawerWidth
          }}
        >
          <Image
            priority
            src={logo}
            alt="logo"
            height={18 * 2}
            width={90 * 2}
          />
        </div>
        <List style={{ display: 'flex', flexDirection: 'column' }}>
          {mainMenuItems.map((item, index) => {
            if (item.subMenu) {
              return (
                <ListItem key={index} button>
                  <Accordion
                    disableGutters
                    style={{
                      all: 'unset',
                      marginLeft: -16,
                      marginBottom: -16,
                      marginTop: -16,
                      width: '100%'
                    }}
                  >
                    <AccordionSummary
                      sx={{ mr: -4 }}
                      expandIcon={<ExpandMore />}
                    >
                      <ListItemIcon style={{ paddingTop: 4 }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={'Orders'} />
                    </AccordionSummary>
                    {item.subMenu.map((subMenuItem, index) => (
                      <AccordionDetails
                        key={index}
                        style={{ marginLeft: 8 * 7, marginTop: -8 }}
                        onClick={() => router.push(subMenuItem.href)}
                      >
                        <Typography variant="body2">
                          {subMenuItem.name}
                        </Typography>
                      </AccordionDetails>
                    ))}
                  </Accordion>
                </ListItem>
              )
            } else
              return (
                <ListItem
                  key={index}
                  button
                  onClick={() => router.push(item.href)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
              )
          })}
        </List>
        <Divider />
        <List style={{ display: 'flex', flexDirection: 'column' }}>
          {subMenuItems.map((item, index) => (
            <ListItem key={index} button onClick={() => router.push(item.href)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
        <div onClick={onProfileClick} style={classes.userRow}>
          <Image
            priority
            className="border-circular"
            src={
              'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
            }
            alt="customer image"
            width={size}
            height={size}
          />
          <Typography style={{ padding: 8, overflowWrap: 'break-word' }}>
            {auth.me.full_name || ''}
          </Typography>
        </div>
      </Drawer>
      <ProfileMenu
        open={open}
        anchorEl={anchorEl}
        onProfileClose={onProfileClose}
      />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
    </Box>
  )
}

export default Layout
