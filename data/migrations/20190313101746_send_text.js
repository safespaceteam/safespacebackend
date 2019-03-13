
exports.up = function(knex, Promise) {
    return knex.schema.createTable('send_text', send_text => {
        send_text.increments();

        send_text
        .integer('userId')
        .references('id')
        .inTable('users')
  
        send_text.string('phone_number', 12).notNullable();
  
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('send_text');
  };
