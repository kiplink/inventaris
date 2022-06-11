const UserController = require('./controllers/user.controller')
const JenisBarangController = require('./controllers/jenis-barang.controller')

module.exports = async (fastify) => {
  fastify.get('/users', UserController.findAll)
  fastify.get('/users/:id', UserController.findOne)
  fastify.post('/register', UserController.create)
  fastify.post('/login', UserController.login)
  fastify.patch('/users/:id', UserController.update)
  fastify.delete('/users/:id', UserController.remove)

  fastify.get('/jenisbarang', JenisBarangController.findAll)
  fastify.get('/jenisbarang/:id', JenisBarangController.findOne)
  fastify.post('/jenisbarang', JenisBarangController.create)
  fastify.patch('/jenisbarang/:id', JenisBarangController.update)
  fastify.delete('/jenisbarang/:id', JenisBarangController.remove)
}
