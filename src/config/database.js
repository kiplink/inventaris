require('dotenv').config()
const configs = require('../../knexfile')
const knex = require('knex')(configs['development'])
module.exports = knex
