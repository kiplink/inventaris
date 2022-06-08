const JenisDomain = require('../../../domain/jenis-barang.domain')

class JenisController {
  async findAll(request, reply) {
    const data = await JenisDomain.findAll()
    reply
      .code(200)
      .header('Content-Type', 'application/json: charset=utf-8')
      .send({
        meta: {
          code: 200,
          message: 'ok',
        },
        data,
      })
  }

  async findOne(request, reply) {
    const data = await JenisDomain.findOne(request.params.id)

    reply
      .code(200)
      .header('Content-Type', 'application/json; charset=uth8')
      .send({
        meta: {
          code: 200,
          message: 'ok',
        },
        data: data.length > 0 ? data[0] : null,
      })
  }

  async create(request, reply) {
    await JenisDomain.create(request.body)

    reply
      .code(201)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({
        meta: {
          code: 201,
          message: 'Created',
        },
      })
  }

  async update(request, reply) {
    await JenisDomain.update(request.params.id, request.body)

    reply
      .code(204)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({
        meta: {
          code: 204,
          message: 'No Content',
        },
      })
  }

  async remove(request, reply) {
    await JenisDomain.delete(request.params.id)

    reply
      .code(204)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send({
        meta: {
          code: 204,
          message: 'No Content',
        },
      })
  }
}

module.exports = new JenisController()
