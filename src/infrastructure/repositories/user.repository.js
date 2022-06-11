const db = require(`../../config/database`)

class UserRepository {
  async findAll(offset, limit, sort) {
    return db
      .select('*')
      .from('users')
      .limit(limit)
      .offset(offset)
      .orderBy('id', sort)
  }
  async findBy(filter) {
    return db.select('*').from('users').where(filter).limit(1)
  }
  async findOne(id) {
    return db.select('*').from('users').where('id', id).limit(1)
  }

  async create(data) {
    try {
      return db
        .insert({
          name: data.name,
          username: data.username,
          password: data.password,
          address: data.address,
        })
        .into('users')
    } catch (error) {
      console.log(error)
    }
  }

  async update(id, data) {
    return db('users').where('id', id).update({
      name: data.name,
      address: data.address,
    })
  }

  async delete(id) {
    return db.from('users').where('id', id).delete()
  }
}

module.exports = new UserRepository()
