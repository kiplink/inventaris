const jenisRepo = require('../infrastructure/repositories/jenis-barang.repositoriy')
const JenisDto = require('../application/rest/dto/jenis-barang.dto')

class JenisService {
  async findAll() {
    return await jenisRepo.findAll()
  }

  async findOne(id) {
    return await jenisRepo.findOne(id)
  }

  async create(data) {
    let jenis = new JenisDto()
    jenis.jenis_barang = data.jenis_barang

    return await jenisRepo.create(jenis)
  }

  async update(id, data) {
    let jenisDto = new JenisDto()
    jenisDto.jenis_barang = data.jenis_barang

    return await jenisRepo.update(id, jenisDto)
  }

  async delete(id) {
    return await jenisRepo.delete(id)
  }
}

module.exports = new JenisService()
