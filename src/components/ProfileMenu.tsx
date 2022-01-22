import {
  Logout
  // PersonAdd,
  // Settings
} from '@mui/icons-material'
import {
  // Avatar,
  // Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography
} from '@mui/material'
import { useRouter } from 'next/router'
import * as React from 'react'

interface ProfileMenuProps {
  open: boolean
  anchorEl: null | HTMLElement
  onProfileClose: () => void
}

export default function ProfileMenu({
  open,
  onProfileClose,
  anchorEl
}: ProfileMenuProps) {
  const router = useRouter()
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onProfileClose}
      onClick={onProfileClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1
          }
        }
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {/*<MenuItem>*/}
      {/*  <Avatar />*/}
      {/*  <Typography>Profile</Typography>*/}
      {/*</MenuItem>*/}
      {/*<MenuItem>*/}
      {/*  <Avatar />*/}
      {/*  <Typography>My account</Typography>*/}
      {/*</MenuItem>*/}
      {/*<Divider />*/}
      {/*<MenuItem>*/}
      {/*  <ListItemIcon>*/}
      {/*    <PersonAdd fontSize="small" />*/}
      {/*  </ListItemIcon>*/}
      {/*  <Typography>Add another account</Typography>*/}
      {/*</MenuItem>*/}
      {/*<MenuItem>*/}
      {/*  <ListItemIcon>*/}
      {/*    <Settings fontSize="small" />*/}
      {/*  </ListItemIcon>*/}
      {/*  <Typography>Settings</Typography>*/}
      {/*</MenuItem>*/}
      <MenuItem onClick={() => router.push('/logout')}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        <Typography>Logout</Typography>
      </MenuItem>
    </Menu>
  )
}

//
// interface MenuOptions {
//   label: string,
//   isDestructive: boolean,
//   onClick: () => void,
// }
//
// const menuOptionsList: MenuOptions[] = [
//   {
//     label: 'Logout',
//     isDestructive: true,
//     onClick: () => {
//     },
//   },
// ];
//
// const ProfileMenu = () => (
//   <Box
//     sx={{
//       position: 'absolute',
//       top: 0,
//       right: 0,
//       backgroundColor: 'background.default',
//       minHeight: '100%',
//       p: 3,
//       zIndex: 10,
//     }}
//   >
//     <Paper
//       elevation={12}
//       sx={{
//         width: 240,
//         mx: 'auto',
//       }}
//     >
//       {menuOptionsList.map((menuOption, index) => (
//         <MenuItem key={index}>
//           <ListItemText
//             primary={(
//               <Typography
//                 color='textPrimary'
//                 variant='subtitle2'
//               >
//                 {menuOption.label}
//               </Typography>
//             )}
//           />
//         </MenuItem>
//       ))}
//     </Paper>
//   </Box>
// );
//
// export default ProfileMenu;

// interface l {
//   icon: any,
//   label: string
// }
//
// const languageOptions: l[] = [
//   {
//     icon: <EmailIcon/>,
//     label: 'English',
//   },
//   {
//     icon: <EmailIcon/>,
//     label: 'German',
//   },
//   {
//     icon: <EmailIcon/>,
//     label: 'Spanish',
//   },
// ];

// const ProfileMenu = () => (
//   <Paper
//     elevation={12}
//     sx={{
//       position: 'absolute',
//       width: 240,
//       mx: 'auto',
//       top: 100,
//       right: 0,
//       p: 3,
//     }}
//   >
//     {languageOptions.map((language, index) => (
//       <MenuItem key={index}>
//         <ListItemIcon>
//           <Box
//             sx={{
//               display: 'flex',
//               height: 20,
//               width: 20,
//               '& img': {
//                 width: '100%',
//               },
//             }}
//           >
//             <img
//               alt={language.label}
//               src={language.icon}
//             />
//           </Box>
//         </ListItemIcon>
//         <ListItemText
//           primary={(
//             <Typography
//               color='textPrimary'
//               variant='subtitle2'
//             >
//               {language.label}
//             </Typography>
//           )}
//         />
//       </MenuItem>
//     ))}
//   </Paper>
// );
// export default ProfileMenu;
