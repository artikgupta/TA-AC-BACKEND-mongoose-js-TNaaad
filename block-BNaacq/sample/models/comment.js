var mongoose = require('mongoose');
const User = require('./user');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var commentSchema = new Schema(
  {
    content: String,
    article: String,
    author: { type: ObjectId, required: true, ref: 'User' },
  },
  { timestamps: true }
);
var Comments = mongoose.model('Comments', commentSchema);
module.exports = Comments;