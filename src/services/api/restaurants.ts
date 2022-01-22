import Api from '../Api'

export async function addRestaurant(values: any) {
  const response = await Api.post('/restaurant/', values)
  return response.data
}

export async function editRestaurant(id: number, values: any) {
  const response = await Api.patch(`/restaurant/${id}/`, values)
  return response.data
}

export async function editWorkingDays(id: number, values: any) {
  const response = await Api.patch(`/restaurant/${id}/working_days/`, values)
  return response.data
}

export async function editWorkingHours(id: number, values: any) {
  const response = await Api.post(`/restaurant/${id}/working_hours/`, values)
  return response.data
}

export async function deleteWorkingHour(restId: number, id: number) {
  const response = await Api.delete(`/restaurant/${restId}/working_hours/${id}`)
  return response.data
}
