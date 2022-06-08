const UserController = require('../../modules/user/controller/user.controller')
const JenisBarangController = require('./controllers/jenis-barang.controller')

module.exports = async (fastify) => {
  fastify.get('/api/v1/users', UserController.findAll)
  fastify.get('/api/v1/users/:id', UserController.findOne)
  fastify.post('/api/v1/users', UserController.create)
  fastify.patch('/api/v1/users/:id', UserController.update)
  fastify.delete('/api/v1/users/:id', UserController.remove)

  fastify.get('/api/v1/jenisbarang', JenisBarangController.findAll)
  fastify.get('/api/v1/jenisbarang/:id', JenisBarangController.findOne)
  fastify.post('/api/v1/jenisbarang', JenisBarangController.create)
  fastify.patch('/api/v1/jenisbarang/:id', JenisBarangController.update)
  fastify.delete('/api/v1/jenisbarang/:id', JenisBarangController.remove)
}
