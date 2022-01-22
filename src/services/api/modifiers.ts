import Api from '../Api'

export async function addModifier(restId: number, values: any) {
  const response = await Api.post(
    `/restaurant/${restId}/modifiers_groups/`,
    values
  )
  return response.data.data
}

export async function editModifier(restId: number, id: number, values: any) {
  const response = await Api.put(
    `/restaurant/${restId}/modifiers_groups/${id}/`,
    values
  )
  return response.data.data
}

export async function addModifierOptions(restId: number, values: any) {
  const response = await Api.post(
    `/restaurant/${restId}/modifiers_options/`,
    values
  )
  return response.data
}

export async function editModifierOptions(restId: number, values: any) {
  const response = await Api.post(
    `/restaurant/${restId}/modifiers_options/`,
    values
  )
  return response.data
}

export async function deleteModifierOption(restId: number, id: number) {
  const response = await Api.delete(
    `/restaurant/${restId}/modifiers_options/${id}`
  )
  return response.data
}

export async function deleteModifier(restId: number, id: number) {
  const response = await Api.delete(
    `/restaurant/${restId}/modifiers_groups/${id}`
  )
  return response.data
}
