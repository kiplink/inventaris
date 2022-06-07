const jenisRepo = require("../repository/jenis.repo")
const JenisDto = require("../dto/jenis.dto")

class JenisService {
    async findAll(){
        return await jenisRepo.findAll()
    }

    async findOne(id){
        return await jenisRepo.findOne(id)
    }

    async create(data){
        let jenis = new JenisDto()
        jenis.jenis_barang = data.jenis_barang

        return await jenisRepo.create(jenis)
    }

    async update(id, data){
        let jenisDto = new JenisDto()
        jenisDto.jenis_barang = data.jenis_barang

        return await jenisRepo.update(id, jenisDto)
    }

    async delete(id){
        return await jenisRepo.delete(id)
    }
}

module.exports = new JenisService()