const express = require('express');

const categoryRouter = express.Router();

categoryRouter.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  })
})

module.exports = categoryRouter;
