
exports.up = function(knex, Promise) {
    return knex.schema.createTable('send_text', messages => {
        messages.increments();
  
        messages.string('phone_number', 12).notNullable();
  
      messages
        .string('text_message')
        .references('message')
        .inTable('messages')
        .notNullable()
  
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('send_text');
  };
