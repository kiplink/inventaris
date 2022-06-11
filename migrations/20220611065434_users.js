/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable('users', function (table) {
    table.increments('id').primary()
    table.string('name').nullable()
    table.string('username').notNullable().unique()
    table.string('address').nullable()
    table.string('password').nullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('users')
}
