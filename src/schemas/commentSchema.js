const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    text: {
      type: String,
      default: '',
    },
    product: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Products',
    },
  },
  { id: false, timestamps: { createdAt: 'created', updatedAt: 'updated' } }
);

const Comment = mongoose.connection.model('Comment', commentSchema, 'comment');
module.exports = Comment;
