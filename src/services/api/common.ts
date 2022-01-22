import Api from '../Api'

export async function fetcher(url: string) {
  const response = await Api.get(url)
  return response.data
}
