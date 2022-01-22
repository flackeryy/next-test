import Api from '../Api'

export async function addArea(restId: number, values: any) {
  const response = await Api.post(`/restaurant/${restId}/areas/`, values)
  return response.data
}

export async function deleteArea(restId: number, id: number) {
  const response = await Api.delete(`/restaurant/${restId}/areas/${id}/`)
  return response.data
}

export async function addTable(restId: number, values: any) {
  const response = await Api.post(`/restaurant/${restId}/tables/`, values)
  return response.data
}

export async function deleteTable(restId: number, id: number) {
  const response = await Api.delete(`/restaurant/${restId}/tables/${id}/`)
  return response.data
}

export async function getAllTables(restId: number) {
  const response = await Api.get(`/restaurant/${restId}/tables/`)
  return response.data.data
}
