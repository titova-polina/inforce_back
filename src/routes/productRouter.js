const express = require('express');
const router = express.Router();
const { asyncWrap } = require('../helpers/asyncWrap');
const {
  addProduct,
  removeProduct,
  getProducts,
} = require('../controllers/productCtrl');
const {
  getProductComments,
  sendProductComment,
} = require('../controllers/commentCtrl');

router.get('/', asyncWrap(getProducts));
router.post('/', asyncWrap(addProduct));
router.delete('/:productId', asyncWrap(removeProduct));
router.post('/comment/:productId', asyncWrap(sendProductComment));

router.get('/comment/:productId', asyncWrap(getProductComments));

module.exports = router;
