import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import Api from 'services/Api'
import { withAuth } from 'utils/axios'

type Provider<T> = (
  token: string,
  me: any
) => Promise<GetServerSidePropsResult<T>>

export default async function authMiddleware<T>(
  context: GetServerSidePropsContext,
  provider: Provider<T>
) {
  try {
    const response = await Api.server({
      method: 'POST',
      url: '/token/refresh/',
      headers: {
        cookie: context.req.headers.cookie || ''
      }
    })

    context.res.setHeader(
      'Set-Cookie',
      response.headers['set-cookie']?.[0] || ''
    )

    const meResponse = await Api.server(
      withAuth(response.data.data.access, {
        method: 'GET',
        url: '/me/'
      })
    )

    return await provider(response.data.data.access, meResponse.data)
  } catch (e: any) {
    console.log('ERROR; LOGOUT', {
      CONFIG: {
        headers: e.config.headers,
        withCredentials: e.config.withCredentials,
        baseURL: e.config.baseURL,
        url: e.config.url,
        method: e.config.method
      },
      RESPONSE: { status: e.response.status, statusText: e.response.statusText }
    })
    // removes refresh_token if expired;
    context.res.setHeader(
      'Set-Cookie',
      'refresh=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    )
    return {
      redirect: {
        destination: '/login',
        permanent: true
      }
    }
  }
}
