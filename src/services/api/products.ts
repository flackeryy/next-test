import Api from '../Api'

export async function addProduct(restId: number, values: any) {
  const response = await Api.post(`/restaurant/${restId}/products/`, values)
  return response.data.data
}

export async function editProduct(restId: number, id: number, values: any) {
  const response = await Api.patch(
    `/restaurant/${restId}/products/${id}/`,
    values
  )
  return response.data.data
}

export async function addProductImage(restId: number, id: number, file: any) {
  const response = await Api.patch(
    `/restaurant/${restId}/products/${id}/image/`,
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

export async function removeProduct(restId: number, id: number) {
  const response = await Api.delete(`/restaurant/${restId}/products/${id}/`)
  return response.data
}
