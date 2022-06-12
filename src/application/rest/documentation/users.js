const register = {
  schema: {
    description: 'Register user',
    tags: ['Users'],
    summary: 'Register new user',
    body: {
      type: 'object',
      properties: {
        name: { type: 'string', example: 'badrus' },
        username: { type: 'string', example: 'badrus' },
        password: { type: 'string', example: 'badrus' },
        address: { type: 'string', example: 'badrus' },
      },
    },
  },
}
const login = {
  schema: {
    description: 'Login user',
    tags: ['Users'],
    summary: 'Login new user',
    body: {
      type: 'object',
      properties: {
        username: { type: 'string', example: 'badrus' },
        password: { type: 'string', example: 'badrus' },
      },
    },
  },
}
module.exports = {
  register,
  login,
}
