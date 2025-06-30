const { CommentRepository } = require('../repository');

class CommentServices {
  constructor() {
    this.repositories = {
      comment: new CommentRepository(),
    };
  }

  async getProductComments(gameId) {
    return this.repositories.comment.getProductComments(gameId);
  }

  async sendProductComment(body) {
    return this.repositories.comment.sendProductComment(body);
  }
}
module.exports = CommentServices;
