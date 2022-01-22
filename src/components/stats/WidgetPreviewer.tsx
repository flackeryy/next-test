import { Card, CardHeader, FormControl, MenuItem, Select } from '@mui/material'

interface WidgetPreviewerProps {
  name: string
  element: JSX.Element
}

const options = [{ name: 'Today' }, { name: '7 Days' }, { name: '30 Days' }]

const WidgetPreviewer = ({ name, element }: WidgetPreviewerProps) => (
  <Card variant="outlined" sx={{ mb: 4 }}>
    <div style={{ display: 'flex', alignItems: 'center', margin: 8 }}>
      <CardHeader title={name} />
      <FormControl>
        {/*<InputLabel id='select-day-range-label'>Age</InputLabel>*/}
        <Select
          labelId="select-day-range-label"
          id="select-day-range-label"
          style={{ maxHeight: 42 }}
          value={0}
          onChange={() => {}}
        >
          {options.map((option, index) => (
            <MenuItem value={index} key={index}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    {element}
  </Card>
)

export default WidgetPreviewer
