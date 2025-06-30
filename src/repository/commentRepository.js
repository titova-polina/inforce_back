const Comment = require('../schemas/commentSchema');

class CommentRepository {
  constructor() {
    this.model = Comment;
  }

  async sendProductComment({ text, user, game }) {
    const comment = new this.model({ text, user, game });
    return comment.save();
  }

  async getProductComments(gameId) {
    return this.model
      .find({ game: gameId })
      .populate([{ path: 'user', select: 'email' }]);
  }
}

module.exports = CommentRepository;
