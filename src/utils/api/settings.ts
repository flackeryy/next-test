import deepCopy from '../deepCopy'

function filterHours(hours: any) {
  return (
    hours.closesHour && hours.closesMin && hours.opensMin && hours.closesMin
  )
}

function formatHours(day: any, hours: any) {
  return {
    ...(hours.apiId && { id: hours.apiId }),
    working_day: day.id,
    closes: `${hours.closesHour}:${hours.closesMin}`,
    opens: `${hours.opensHour}:${hours.opensMin}`
  }
}

export function formatValues(values: any) {
  const { workingDays, ...settingsValues } = values

  const workingHours = workingDays.reduce((acc: any, cur: any) => {
    if (cur.working_hours.length) {
      return [
        ...acc,
        ...cur.working_hours
          .filter(filterHours)
          .map((hours: any) => formatHours(cur, hours))
      ]
    }
    return acc
  }, [])

  return {
    workingDays,
    workingHours,
    settingsValues
  }
}

export function parseWorkingDays(workingDays: any[]) {
  try {
    const copy = deepCopy(workingDays)
    return copy.map((row: any) => {
      return {
        ...row,
        working_hours: row.working_hours?.map((hours: any) => {
          if (typeof hours !== 'object')
            return {
              closesHour: '',
              closesMin: '',
              opensHour: '',
              opensMin: ''
            }

          const [closesHour = '', closesMin = ''] = hours?.closes?.split(':')
          const [opensHour = '', opensMin = ''] = hours?.opens?.split(':')
          return {
            ...(hours?.id && { apiId: hours.id }),
            closesHour,
            closesMin,
            opensHour,
            opensMin
          }
        })
      }
    })
  } catch (e) {
    return []
  }
}
