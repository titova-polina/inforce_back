const Product = require('../schemas/productSchema');

class ProductsRepository {
  constructor() {
    this.model = Product;
  }

  async addProduct(payload) {
    const product = new this.model(payload);
    return product.save();
  }

  async getProducts(ordering) {
    return this.model.find({}, '', { sort: ordering });
  }
}

module.exports = ProductsRepository;
