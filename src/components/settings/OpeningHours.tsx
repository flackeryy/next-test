import { Button, Card, Switch } from '@mui/material'
import useWorkingHour from 'hooks/api/schedule/useWorkingHour'
import t from 'locales/en/translations.json'
import React from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'

import FormLabel from '../FormLabel'
import TimePeriodSelect from './TimePeriodSelect'

const OpeningHours = () => {
  const methods = useFormContext()
  const days = useFieldArray({
    control: methods.control,
    name: 'workingDays'
  })
  return (
    <>
      {days.fields.map((day: any, index) => {
        return (
          <Card key={index} sx={{ p: 2, mb: 2, width: '100%' }}>
            <FormLabel text={day.name} />

            <Hours name={`workingDays.${index}.working_hours`} />

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Controller
                render={({ field: { value, name } }) => {
                  return (
                    <>
                      <Switch
                        checked={value}
                        color="primary"
                        onChange={(e) =>
                          methods.setValue(name, e.target.checked)
                        }
                        edge="start"
                        name="isClosed"
                      />
                      <FormLabel
                        text={t.settings.tile4.closed}
                        style={{ paddingRight: 8 }}
                      />
                    </>
                  )
                }}
                name={`workingDays.${index}.closed`}
              />

              <Controller
                render={({ field: { value, name } }) => (
                  <>
                    <Switch
                      color="primary"
                      checked={value}
                      onChange={(e) => methods.setValue(name, e.target.checked)}
                      edge="start"
                      name="isOpenAlways"
                    />
                    <FormLabel text={t.settings.tile4.open_always} />
                  </>
                )}
                name={`workingDays.${index}.open_24`}
              />
            </div>
          </Card>
        )
      })}
    </>
  )
}

export default OpeningHours

interface HoursProps {
  name: string
}

function Hours({ name }: HoursProps) {
  const methods = useFormContext()
  const workingHour = useWorkingHour()

  const hoursArr = useFieldArray({
    control: methods.control,
    name
  })

  const handleRemove = (row: any, index: number) => {
    if (row.apiId) {
      workingHour.onDelete(row.apiId)
    }
    hoursArr.remove(index)
  }

  return (
    <>
      {hoursArr.fields.map((row, index) => (
        <div
          key={row.id}
          style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}
        >
          <TimePeriodSelect
            name={`${name}.${index}`}
            onRemove={() => handleRemove(row, index)}
          />
        </div>
      ))}
      <Button
        variant="outlined"
        color="secondary"
        onClick={() =>
          hoursArr.append({
            opensHour: '',
            opensMin: '',
            closesHour: '',
            closesMin: ''
          })
        }
      >
        {!hoursArr.fields.length
          ? t.settings.tile4.add_time_period
          : t.settings.tile4.add_more_time_period}
      </Button>
    </>
  )
}
