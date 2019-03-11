
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {message: 'YOU got THIS!!', userId: 1},
        {message: 'I am successful', userId: 1},
        {message: 'Im bringing a positive attitude to work every day', userId: 1}
      ]);
    });
};
