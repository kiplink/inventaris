const UserRepository = require('../infrastructure/repositories/user.repository')
const UserDto = require('../application/rest/dto/user.dto')
const bcrypt = require('bcryptjs')
const tokenBuilder = require('../application/rest/middleware/token-builder')
class UserService {
  async findAll(offset = 0, limit = 10, sort = 'desc') {
    return await UserRepository.findAll(offset, limit, sort)
  }

  async findOne(id) {
    return await UserRepository.findOne(id)
  }
  async create(data) {
    try {
      const rounds = 8
      const hash = bcrypt.hashSync(data.password, rounds)
      const requestBody = {
        name: data.name,
        username: data.username,
        password: hash,
        address: data.address,
      }
      return await UserRepository.create(requestBody)
    } catch (error) {
      const err = new Error()
      err.statusCode = 405
      err.message = 'jancok ngoding ae susah'
      throw err
    }
  }
  async login(data) {
    try {
      const user = await UserRepository.findBy({
        username: data.username,
      })
      if (bcrypt.compareSync(data.password, user[0].password)) {
        const token = tokenBuilder(user[0])
        return token
      }
    } catch (error) {
      console.log(error)
    }
  }
  async update(id, data) {
    let userDto = new UserDto()
    userDto.name = data.name
    userDto.address = data.address

    return await UserRepository.update(id, userDto)
  }

  async delete(id) {
    return await UserRepository.delete(id)
  }
}

module.exports = new UserService()
