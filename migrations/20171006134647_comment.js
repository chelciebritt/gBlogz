
  exports.up = function(knex, Promise) {
    return knex.schema.createTable('comment', function (table){
      table.increments('id').primary()
      table.varchar('author_name')
      table.text('body')
      table.timestamp('creation_time')
      table.integer('blog_id')
      .references('blog_post.id')
      .onDelete('CASCADE')
    })
  };
  exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("comment")
};
