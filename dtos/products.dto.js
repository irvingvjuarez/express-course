const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(20);
const price = Joi.number().positive().integer();
const description = Joi.string().alphanum().min(10).max(60);

exports.CreateProductSchema = Joi.object({
  id,
  name: name.required(),
  price: price.required(),
  description
})

exports.UpdateProductSchema = Joi.object({
  id: id.required(),
  name,
  price,
  description
})

const GetProductSchema = exports.GetProductSchema =  Joi.object({
  id: id.required()
})

exports.DeleteProductsSchema = GetProductSchema;
