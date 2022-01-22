import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { API_URL } from 'config'
import { AUTH, setAuth } from 'hooks/api/auth/useAuth'
import Router from 'next/router'
import { isServer } from 'utils/next'

import { refresh } from './api/auth'

class Api {
  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      withCredentials: true,
      baseURL: isServer() ? `${API_URL}/api` : '/api',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use((req) => {
      if (AUTH.token && req.headers) {
        req.headers['Authorization'] = `Bearer ${AUTH.token}`
      }
      return req
    })

    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (error) => {
        if (isServer()) throw error

        return new Promise(async (resolve, reject) => {
          try {
            const originalReq = error.config as any
            const isRefresh = originalReq.url === '/token/refresh/'
            const isUnauthorized = error.response.status === 401

            if (originalReq._isRetry) {
              return reject(error)
            }

            if (isRefresh && isUnauthorized) {
              await Router.push('/logout')
              return resolve({})
            }

            if (!isRefresh && isUnauthorized) {
              const response = await refresh()
              setAuth(response.data.access)

              originalReq.headers[
                'Authorization'
              ] = `Bearer ${response.data.access}`
              originalReq._isRetry = true

              const originalRes = await this.instance.request(originalReq)
              resolve(originalRes)
            }
            reject(error)
          } catch (e) {
            reject(error)
          }
        })
      }
    )
  }

  get(url: string) {
    return this.instance.get(url)
  }

  post(url: string, data: any, config?: AxiosRequestConfig) {
    return this.instance.post(url, data, config)
  }

  patch(url: string, data: any, config?: AxiosRequestConfig) {
    return this.instance.patch(url, data, config)
  }

  put(url: string, data: any, config?: AxiosRequestConfig) {
    return this.instance.put(url, data, config)
  }

  delete(url: string) {
    return this.instance.delete(url)
  }

  server(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }
}

export default new Api()
