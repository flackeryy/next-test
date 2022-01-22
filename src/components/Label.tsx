import { styled } from '@mui/material/styles'

export type Color = 'primary' | 'secondary' | 'success' | 'error' | 'warning'

interface LabelProps {
  children: any
  color: Color
}

const LabelRoot = styled('span', {
  // Configure which props should be forwarded on DOM
  // shouldForwardProp: (prop) => prop !== 'color',
  // name: 'LabelRoot',
  // slot: 'Root',
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === 'primary' && styles.primary,
    props.color === 'secondary' && styles.secondary,
    props.success === 'success' && styles.success,
    props.error === 'error' && styles.error,
    props.warning === 'warning' && styles.warning
  ]
})<LabelProps>(({ theme, color }) => ({
  alignItems: 'center',
  color: theme.palette[color].contrastText,
  backgroundColor: theme.palette[color].main,
  borderRadius: theme.shape.borderRadius,
  cursor: 'default',
  display: 'inline-flex',
  flexGrow: 0,
  flexShrink: 0,
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.pxToRem(11),
  fontWeight: theme.typography.fontWeightMedium,
  justifyContent: 'center',
  letterSpacing: 0.5,
  minWidth: 20,
  paddingBottom: theme.spacing(0.5),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  paddingTop: theme.spacing(0.5),
  textTransform: 'uppercase',
  whiteSpace: 'nowrap'
}))

const Label = ({ color = 'primary', children }: LabelProps) => (
  <LabelRoot color={color}>{children}</LabelRoot>
)

export default Label
