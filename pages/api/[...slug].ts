import { API_URL } from 'config'
import { createProxyMiddleware } from 'http-proxy-middleware'

const proxyConfig = {
  target: API_URL,
  pathRewrite: (path: string) => `${path}/`,
  changeOrigin: true,
  secure: false
}

const proxy: any = createProxyMiddleware(proxyConfig)

export const config = {
  api: {
    // - https://nextjs.org/docs/api-routes/api-middlewares#custom-config
    externalResolver: true,
    bodyParser: false // not to use url encoded form like streaming POST request
  }
}

export default function (req: any, res: any) {
  proxy(req, res, (result: any) => {
    if (result instanceof Error) {
      throw result
    }

    throw new Error(
      `Request '${req.url}' is not proxied! We should never reach here!`
    )
  })
}
