const express = require('express')
const knex = require('../db/knex')
const router = express.Router();

router.get('/', (req, res) => {
  knex('comment')
    .select()
    .then(comment => {
      res.render('comment', {
        comment: comment
      });
    });
});

function respondAndRenderComment(id, res, viewName) {
  knex('comment')
    .select()
    .where('id', id)
    .first()
    .then(comment => {
      res.render(viewName, comment);
    });
};

// router.get('/:id', (req, res) => {
//   const id = req.params.id
//   respondAndRenderBlogPost(id, res, 'single')
// })
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  respondAndRenderComment(id, res, 'editcomment')
})
router.get('/new', (req, res) => {
  res.render('newcomment')
})

function insertUpdateRedirect(req, res, callback) {
  const comment = {
    author: req.body.author_name,
    body: req.body.body,
  };
  callback(comment)
}

router.post('/', (req, res) => {
  insertUpdateRedirect(req, res, (comment) => {
    knex('comment')
      .insert(id, 'id')
      .then(ids => {
        const id = ids[0];
        res.redirect(`newcomment`)
      })
  })
})
router.put('/:id', (req, res) => {
  insertUpdateRedirect(req, res, (comment) => {
    knex('comment')
      .where('id', req.params.id)
      .update(comment, 'id')
      .then(() => {
        res.redirect(`/comment/${req.params.id}`)
      })
  })
})

router.delete(':id', (req, res) => {
  const id = req.params.id
  knex('comment')
    .where('id', id)
    .del()
    .then(() => {
      res.redirect('/comment');
    });
})

module.exports = router;
