const fs = require('fs');
const products = require('../mock/products');
const { faker } = require('@faker-js/faker');

class ProductsService {
  constructor() {
    this.content = products.data;
    this.filePath = `${__dirname}/../mock/products.json`;
  }

  updateDatabase(content, payload) {
    this.content = content;

    return new Promise((resolve, reject) => {
      try {
        fs.writeFileSync(this.filePath, JSON.stringify({'data': this.content}));
        resolve({message: 'success', data: payload})
      } catch(error) {
        reject(error)
      }
    })
  }

  async create(product) {
    const newProduct = { id: faker.string.uuid(), ...product }
    this.content.push(newProduct);

    const res = await this.updateDatabase(this.content, newProduct)
    return res;
  }

  findAll() {

  }

  findOne(callback) {
    const product = this.content.find(callback);
    if (product) return product;

    throw new Error('Product not found');
  }

  update(id, product) {
    const currentProduct = this.findOne(id)
    this.delete(id);

    const newProduct = {...currentProduct, ...product}
    const updatedProduct = this.create({id: id, ...newProduct})
    return updatedProduct;
  }

  async delete(id) {
    const productIndex = this.content.findIndex(item => item.id === id);
    const product = this.content[productIndex];

    this.content.splice(productIndex, 1);
    const res = await this.updateDatabase(this.content, product)
    return res
  }
}

module.exports = ProductsService;
