const express = require('express')
const knex = require('../db/knex')
const router = express.Router();

router.get('/', (req, res) => {
  knex('blog_post')
    .select()
    .then(blog_post => {
      res.render('all', {
        blog_post: blog_post
      });
    });
});

function respondAndRenderBlogPost(id, res, viewName) {
  knex('blog_post')
    .select()
    .where('id', id)
    .first()
    .then(blog_post => {
      res.render(viewName, blog_post);
    });
};

router.get('/:id', (req, res) => {
  const id = req.params.id
  respondAndRenderBlogPost(id, res, 'single')
})
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  respondAndRenderBlogPost(id, res, 'edit')
})
router.get('/new', (req, res) => {
  res.render('new')
})

function insertUpdateRedirect(req, res, callback) {
  const blogpost = {
    title: req.body.title,
    author: req.body.author,
    body: req.body.body,
  };
  callback(blogpost)
}

router.post('/', (req, res) => {
  insertUpdateRedirect(req, res, (blogpost) => {
    knex('blog_post')
      .insert(id, 'id')
      .then(ids => {
        const id = ids[0];
        res.redirect(`/blogpost/${id}`)
      })
  })
})
router.put('/:id', (req, res) => {
  insertUpdateRedirect(req, res, (blogpost) => {
    knex('blog_post')
      .where('id', req.params.id)
      .update(blogpost, 'id')
      .then(() => {
        res.redirect(`/blogpost/${req.params.id}`)
      })
  })
})

router.delete(':id', (req, res) => {
  const id = req.params.id
  knex('blog_post')
    .where('id', id)
    .del()
    .then(() => {
      res.redirect('/blogpost');
    });
})


module.exports = router;
