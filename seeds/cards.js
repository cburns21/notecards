
exports.seed = function(knex, Promise) {
  return knex('notecards').del()
    .then(function () {
      return knex('notecards').insert([
        {id: 1, 
        name: '.map',
        description: 'creates a new array with the results of calling a provided function on every element in the calling array.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
      },
        {id: 2, 
          name: '.filter',
          description: 'creates a new array with all elements that pass the test implemented by the provided function.',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
        },
        {id: 3, 
          name: '.reduce',
          description: 'executes a reducer function (that you provide) on each member of the array resulting in a single output value.',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce',}
      ]);
    });
};