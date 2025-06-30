const ProductsRepository = require('../repository/productRepository');

class ProductServices {
  constructor() {
    this.repositories = {
      products: new ProductsRepository(),
    };
  }

  async addProduct(body) {
    return this.repositories.products.addProduct(body);
  }

  async removeProduct(id) {
    return this.model.findByIdAndDelete(id);
  }

  async getProducts() {
    return this.repositories.products.getProducts();
  }
}
module.exports = ProductServices;
