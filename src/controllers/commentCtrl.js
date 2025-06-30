const { CommentServices } = require('../services/index');
const { HttpCode } = require('../config/constants');

const commentService = new CommentServices();

const getProductComments = async (req, res, next) => {
  const { productId } = req.params;
  const comments = await commentService.getProductComments(productId);
  res.status(HttpCode.OK).json({
    status: 'success',
    code: HttpCode.OK,
    comments,
  });
};

const sendProductComment = async (req, res, next) => {
  const { productId } = req.params;
  const { text } = req.body;
  const result = await commentService.sendProductComment({
    text,
    product: productId,
  });
  res.status(HttpCode.OK).json({
    status: 'success',
    code: HttpCode.OK,
    ...result,
  });
};

module.exports = {
  getProductComments,
  sendProductComment,
};
