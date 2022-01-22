import Api from '../Api'

export async function addCategory(restId: number, menuId: any, data: any) {
  const response = await Api.post(`/restaurant/${restId}/categories/`, {
    menu: Number(menuId),
    ...data
  })
  return response.data
}

export async function editCategory(restId: number, id: number, data: any) {
  const response = await Api.patch(
    `/restaurant/${restId}/categories/${id}/`,
    data
  )
  return response.data
}

export async function removeCategory(restId: number, id: number) {
  const response = await Api.delete(`/restaurant/${restId}/categories/${id}/`)
  return response.data
}

export async function reorderCategories(restId: number, data: any) {
  const response = await Api.patch(
    `/restaurant/${restId}/categories_bulk/`,
    data
  )
  return response.data
}
