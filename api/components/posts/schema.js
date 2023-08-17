const Joi = require('joi');

const id = Joi.string().uuid();
const content = Joi.string().min(5).max(255);
const image = Joi.string().uri();
const createdBy = Joi.string().uuid();

const createPostSchema = Joi.object({
    content: content.required(),
    image: image.required(),
    createdBy: createdBy.required(),
})

const updatePostSchema = Joi.object({
    content: content,
    image: image
})

const getPostByIdSchema = Joi.object({
    id: id.required(),
})

module.exports = { createPostSchema, updatePostSchema, getPostByIdSchema }
