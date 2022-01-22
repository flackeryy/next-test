// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: [
      'www.gravatar.com',
      'gochowtime.com',
      'dev-bucket-azh.s3.amazonaws.com'
    ]
  }
}
