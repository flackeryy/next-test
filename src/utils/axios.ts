import { AxiosRequestConfig } from 'axios'

export interface AuthProps {
  token: string
  me: any
}

export function withAuth(
  token: string,
  config: AxiosRequestConfig
): AxiosRequestConfig {
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`
    }
  }
}

export function getId(me: any) {
  return me?.data?.restaurants[0]?.id
}
