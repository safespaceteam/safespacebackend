
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', messages => {
      messages.increments();

      messages
        .integer('userId')
        .references('id')
        .inTable('users')
        .notNullable();

    messages.string('message').notNullable()

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('messages');
};
