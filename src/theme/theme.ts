import { createTheme, responsiveFontSizes } from '@mui/material/styles'

import Colors from '../assets/colors'

// Create a theme instance.
const theme = createTheme({
  direction: 'ltr',
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji'
    ].join(','),
    button: {
      fontWeight: 600
    },
    h1: {
      fontWeight: 600,
      fontSize: '3.5rem'
    },
    h2: {
      fontWeight: 600,
      fontSize: '3rem'
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.25rem'
    },
    h4: {
      fontWeight: 600,
      fontSize: '2rem'
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem'
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem'
    },
    overline: {
      fontWeight: 600
    }
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(0, 0, 0, 0.05)',
    '0px 2px 4px rgba(0, 0, 0, 0.15), 0px 0px 0px 1px rgba(0, 0, 0, 0.05)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)',
    '0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)'
  ],
  palette: {
    action: {
      active: '#6b778c'
    },
    background: {
      default: '#f4f5f7',
      paper: '#ffffff'
    },
    error: {
      contrastText: '#ffffff',
      main: '#f44336'
    },
    mode: 'light',
    primary: {
      contrastText: '#ffffff',
      main: Colors.LIME['500']
    },
    secondary: {
      contrastText: '#ffffff',
      main: Colors.GREY['400']
    },
    success: {
      contrastText: '#ffffff',
      main: '#4caf50'
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c'
    },
    warning: {
      contrastText: '#ffffff',
      main: '#ff9800'
    }
  },
  // transitions: {
  //   // So we have `transition: none;` everywhere
  //   create: () => 'none',
  // },
  components: {
    // Name of the component
    // MuiTextField: {
    //   color: Colors.LIME["500"],
    // },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          // '&::placeholder': {
          //   opacity: 0.86,
          //   color: '#42526e',
          // },
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        // The props to apply
        disableRipple: true // No more ripple, on the whole application 💣!
      }
    },
    MuiAvatar: {
      styleOverrides: {
        fallback: {
          height: '75%',
          width: '75%'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box'
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          height: '100%',
          width: '100%'
        },
        body: {
          height: '100%'
        },
        '#root': {
          height: '100%'
        },
        '#nprogress .bar': {
          zIndex: '2000 !important'
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6'
        }
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: 'hidden'
        }
      }
    },
    // TODO this is the code that displays the text when the drawer is hidden.
    //  I've commented it out for now.
    // MuiListItemIcon: {
    //   styleOverrides: {
    //     root: {
    //       minWidth: 'auto',
    //       marginRight: '16px',
    //     },
    //   },
    // },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    }
  },
  // rounded corners
  shape: {
    borderRadius: 8
  }
})

export default responsiveFontSizes(theme)
