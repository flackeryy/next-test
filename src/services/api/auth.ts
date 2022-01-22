import Api from '../Api'

export async function token(data: any) {
  const response = await Api.post('/token/', data)
  return response.data.data
}

export async function tokenGoogle(token: string, email: string) {
  const response = await Api.post('/token-google/', {
    email,
    google_access_token: token
  })
  return response.data.data
}

export async function reg(data: any) {
  const response = await Api.post('/signup-restaurant/', data)
  return response?.data?.data
}

export async function regFinish(data: any) {
  const response = await Api.post('/user-restaurant/', data)
  return response?.data?.data
}

export async function regGoogle(token: string, email: string) {
  const response = await Api.post('/signup-google/', {
    email,
    google_access_token: token
  })
  return response?.data?.data
}

export async function activate(uuid: string, token: string) {
  const response = await Api.post(`/activate/${uuid}/${token}/`, {})
  return response.data.data
}

export async function refresh() {
  const response = await Api.post('/token/refresh/', {})
  return response.data
}
