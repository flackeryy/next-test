import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import t from 'locales/en/translations.json'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

enum Hours {
  _00 = '00',
  _01 = '01',
  _02 = '02',
  _03 = '03',
  _04 = '04',
  _05 = '05',
  _06 = '06',
  _07 = '07',
  _08 = '08',
  _09 = '09',
  _10 = '10',
  _11 = '11',
  _12 = '12',
  _13 = '13',
  _14 = '14',
  _15 = '15',
  _16 = '16',
  _17 = '17',
  _18 = '18',
  _19 = '19',
  _20 = '20',
  _21 = '21',
  _22 = '22',
  _23 = '23'
}

enum Minutes {
  _00 = '00',
  _30 = '30'
}

interface TimeSelectProps {
  data: any
  value: string
  onChange: (e: string) => void
}

const TimeSelect = ({ data, value, onChange }: TimeSelectProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as typeof data)
  }

  return (
    <Select autoWidth value={value} onChange={handleChange}>
      {/* @ts-ignore*/}
      {Object.values(data).map((time: any, index) => (
        <MenuItem key={index} value={time}>
          {time}
        </MenuItem>
      ))}
    </Select>
  )
}

interface TimePeriodSelectProps {
  name: string
  onRemove: any
}

export default function TimePeriodSelect({
  name,
  onRemove
}: TimePeriodSelectProps) {
  const methods = useFormContext()
  return (
    <>
      <div>
        <Controller
          render={({ field: { value, name } }) => (
            <TimeSelect
              data={Hours}
              value={value}
              onChange={(e) => methods.setValue(name, e)}
            />
          )}
          name={`${name}.opensHour`}
        />
        <Controller
          render={({ field: { value, name } }) => (
            <TimeSelect
              data={Minutes}
              value={value}
              onChange={(e) => methods.setValue(name, e)}
            />
          )}
          name={`${name}.opensMin`}
        />
      </div>

      <Typography sx={{ ml: 3, mr: 3 }}>{t.settings.tile4.to}</Typography>

      <div>
        <Controller
          render={({ field: { value, name } }) => (
            <TimeSelect
              data={Hours}
              value={value}
              onChange={(e) => methods.setValue(name, e)}
            />
          )}
          name={`${name}.closesHour`}
        />
        <Controller
          render={({ field: { value, name } }) => (
            <TimeSelect
              data={Minutes}
              value={value}
              onChange={(e) => methods.setValue(name, e)}
            />
          )}
          name={`${name}.closesMin`}
        />
      </div>

      <button
        style={{
          margin: '0 1.25rem',
          outline: 'none',
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer'
        }}
        onClick={onRemove}
      >
        <DeleteOutlineIcon />
      </button>
    </>
  )
}
