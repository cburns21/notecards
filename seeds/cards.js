
exports.seed = function(knex, Promise) {
  return knex('notecards').del()
    .then(function () {
      // Inserts seed entries
      return knex('notecards').insert([
        {id: 1, name: 'snap'},
        {id: 2, name: 'crackle'},
        {id: 3, name: 'pop'}
      ]);
    });
};
