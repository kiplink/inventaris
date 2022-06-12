const build = require('../server')

const test = async () => {
  const app = build.createServer()

  const response = await app.inject({
    method: 'GET',
    url: '/documentation',
  })
}
test()
