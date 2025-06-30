const { HttpCode } = require('../config/constants');
const ProductServices = require('../services/productServices');

const productServices = new ProductServices();

const addProduct = async (req, res, next) => {
  const product = await productServices.addProduct(req.body);

  return res.status(HttpCode.CREATED).json({
    status: 'success',
    code: HttpCode.CREATED,
    product,
  });
};

const removeProduct = async (req, res, next) => {
  const { productId } = req.params;
  await productServices.removeProduct(productId);

  return res.status(HttpCode.OK).json({
    status: 'success',
    code: HttpCode.OK,
  });
};

const getProducts = async (req, res, next) => {
  const products = await productServices.getProducts();

  return res.status(HttpCode.OK).json({
    products,
    status: 'success',
    code: HttpCode.OK,
  });
};

module.exports = {
  addProduct,
  removeProduct,
  getProducts,
};
