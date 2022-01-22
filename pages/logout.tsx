import { GetServerSidePropsContext } from 'next'
import Api from 'services/Api'

export default function Logout() {
  return <></>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    await Api.server({
      method: 'POST',
      url: '/logout/',
      headers: {
        cookie: context.req.headers.cookie || ''
      }
    })
  } catch (error: any) {
    if (error && error.response) {
      console.log(
        'LOGOUT ERROR:',
        error.response.status,
        error.response.statusText
      )
    }
    if (error && !error.response) {
      console.log('Error: something went wrong on the server!')
    }
  }

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
