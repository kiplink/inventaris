const db = require('../../config/database')

class JenisBarangRepository {
  async findAll() {
    return db.select('*').from('jenis_barang')
  }

  async findOne(id) {
    return db.select('*').from('jenis_barang').where('id', id).limit(1)
  }

  async create(data) {
    return db
      .insert({
        jenis_barang: data.jenis_barang,
      })
      .into('jenis_barang')
  }

  async update(id, data) {
    return db('jenis_barang').where('id', id).update({
      jenis_barang: data.jenis_barang,
    })
  }

  async delete(id) {
    return db.from('jenis_barang').where('id', id).delete()
  }
}

module.exports = new JenisBarangRepository()
