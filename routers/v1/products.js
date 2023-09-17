const express = require('express');
const productsService = require('../../services/product.service');
const dataValidationHandler = require('../../middlewares/dataValidation.handler');
const { GetProductSchema, CreateProductSchema } = require('../../dtos/products.dto');

const productsRouter = express.Router()
const Products = new productsService();

productsRouter.get('/', (req, res) => {
  res.json(Products.content);
})

productsRouter.get(
  '/:id',
  dataValidationHandler(GetProductSchema, 'params'),
  (req, res, next) => {
    try {
      const detail = Products.findOne(item => item.id === req.params.id);
      res.json(detail);
    } catch(error) {
      next(error);
    }
})

productsRouter.post(
  '/',
  dataValidationHandler(CreateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const createRes = await Products.create(req.body);
      res.status(201).json(createRes);
    } catch(err) {
      next(err);
    }
})

productsRouter.put('/:id', (req, res, next) => {
  try {
    const product = Products.update(req.params.id, req.body);
    const message = 'success';
    res.status(201).json({ message, product });
  } catch(err) {
    next(err);
  }
})

productsRouter.patch('/:id', (req, res) => {
  const { body } = req;
  const { id } = req.params;

  res.json({
    message: 'success',
    body,
    id
  })
})

productsRouter.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedRes = await Products.delete(id);
    res.status(200).json(deletedRes);
  } catch (err) {
    next(err);
  }
})

module.exports = productsRouter;
