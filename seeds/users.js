
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(() => { return knex('properties').del()})
    .then(() => knex('users').insert([
      { id: 1, username: 'Nik' },
      { id: 2, username: 'John' },
      { id: 3, username: 'Steven' },
    ]))
    .then(() => knex('properties').insert([
      {
        id: 1, location: 'Austin Texas', name: 'Mansion', price: '$325', source_url: 'https://www.airbnb.com/rooms/1428582?location=Austin%2C%20TX&adults=14&children=0&infants=0&s=wcI2xWdA', image_url: 'https://a0.muscache.com/im/pictures/51dca2a3-f90e-4f03-8156-fe5d3da93e58.jpg?aki_policy=xx_large', description: 'That\'s a mansion', user_id: '2',
      },
      {
        id: 2, location: 'Austin Texas', name: 'Shack', price: '$65', source_url: 'https://www.airbnb.com/rooms/1021139?location=Austin%2C%20TX&adults=2&children=0&infants=0&s=nByvBfwo', image_url: 'https://a0.muscache.com/im/pictures/16086432/099f134b_original.jpg?aki_policy=xx_large', description: 'At least it is something', user_id: '3',
      },
      {
        id: 3, location: 'Austin Texas', name: 'Pad', price: '$123', source_url: 'https://www.airbnb.com/rooms/12311888?location=Austin%2C%20TX&adults=14&children=0&infants=0&s=wcI2xWdA', image_url: 'https://a0.muscache.com/im/pictures/7d2b28cf-2123-4dce-bd25-cdd07ae5c6da.jpg?aki_policy=xx_large', description: 'Seems Nice', user_id: '1',
      },
    ]));
};
