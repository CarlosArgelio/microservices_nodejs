const express = require('express');
const controller = require('./index');
const response = require('../../../middlewares/response');
const { validatorHandler } = require('../../../middlewares/validator.handler');
const { createPostSchema, updatePostSchema, getPostByIdSchema } = require('./schema');


const router = express.Router();

router.get('/', list);
router.get(
  '/:id',
  validatorHandler(getPostByIdSchema, 'params'),
  get
);
router.get('/my-posts', myPosts);
router.post(
  '/',
  validatorHandler(createPostSchema, 'body'),
  create
);
router.put(
  '/:id',
  validatorHandler(getPostByIdSchema, 'params'),
  update
);
router.delete(
  '/:id',
  validatorHandler(getPostByIdSchema, 'params'),
  remove
);

function list(req, res, next) {
  try {
    let message = controller.list();
    response.success(req, res, message, 200);
  } catch (error) {
    console.log(error);
  }
}

function get(req, res, next) {
  try {
    const { id } = req.params;
    let message = controller.get(id);
    response.success(req, res, message, 200);
  } catch (error) {
    //
  }
}

function myPosts(req, res, next) {
  try {
    let message = controller.list();
    response.success(req, res, message, 200);
  } catch (error) {
    console.log(error);
  }
}

function create(req, res, next) {
  try {
    const { body } = req;
    let message = controller.create(body);
    response.success(req, res, message, 201);
  } catch (error) {
  }
}

function update(req, res, next) {
  try {
    const { body } = req;
    const { id } = req.params;
    let message = controller.update(id, body);
    response.success(req, res, message, 200);
  } catch (error) {

  }
}

function remove(req, res, next) {
  try {
   const { id } = req.params;
   let message = controller.remove(id);
   response.success(req, res, message, 204);
  } catch (error) {

  }
}

module.exports = router

