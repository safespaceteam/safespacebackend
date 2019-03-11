
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', users => {
        users.increments();

        users.string('name', 128).notNullable()
  
        users 
          .string('username', 128)
          .notNullable()
          .unique()
        
        
        users.string('password', 128).notNullable()
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };
