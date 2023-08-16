const express = require('express');

const router = express.Router()

router.get('/', list)
router.get('/:id', get)
router.get('/my-posts', myPosts)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

function list(req, res, next) {
    res.send('Hello world')
}

function get(req, res, next) {
  res.send('Hello world')
}

function myPosts(req, res, next) {
  res.send('Hello world')
}

function create(req, res, next) {
  res.send('Hello world')
}

function update(req, res, next) {
  res.send('Hello world')
}

function remove(req, res, next) {
  res.send('Hello world')
}

module.exports = router

