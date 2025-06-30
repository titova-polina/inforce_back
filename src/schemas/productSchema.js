const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    imageUrl: {
      type: String,
      default: '',
    },
    count: {
      type: Number,
      default: '',
    },
    width: { type: Number, default: '' },
    height: { type: Number, default: '' },
    weight: {
      type: String,
      default: '',
    },
  },
  { id: false, timestamps: { createdAt: 'created', updatedAt: 'updated' } }
);

const Product = mongoose.connection.model('Products', productSchema, 'product');

module.exports = Product;
