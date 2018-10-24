exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('username');
    })
    .createTable('properties', (table) => {
      table.increments();
      table.string('location');
      table.string('name');
      table.string('price');
      table.string('source_url');
      table.string('image_url');
      table.string('description');
      table.integer('user_id').references('id').inTable('users').notNull()
        .onDelete('cascade');
    });
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('properties'),
    knex.schema.dropTableIfExists('users')]);
};
