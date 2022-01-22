import Api from '../Api'

export async function addMenu(restId: number, data: any) {
  const response = await Api.post(`/restaurant/${restId}/menus/`, data)
  return response.data
}

export async function reorderMenus(restId: number, data: any) {
  const response = await Api.patch(`/restaurant/${restId}/menus_bulk/`, data)
  return response.data
}

export async function editMenu(restId: number, id: number, data: any) {
  const response = await Api.patch(`/restaurant/${restId}/menus/${id}/`, data)
  return response.data
}

export async function addMenuImage(restId: number, id: number, file: any) {
  const response = await Api.patch(
    `/restaurant/${restId}/menus/${id}/image/`,
    file,
    {
      headers: {
        'Content-Type': file.type,
        'Content-Disposition': `attachments; filename="${file.name}";`
      }
    }
  )
  return response.data
}

export async function removeMenu(restaurantId: number, id: number) {
  const response = await Api.delete(`/restaurant/${restaurantId}/menus/${id}/`)
  return response.data
}
