
exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(table) {
      table.string('phoneNumber', 12)
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.table('users', function(table) {
      table.dropColumnIfExists('phoneNumber')
    })
  }
