var mongoose = require('mongoose');
const User = require('./user');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var articleSchema = new Schema(
  {
    title: String,
    description: String,
    tags: [String],
    likes: String,
    author: { type: ObjectId, required: true, ref: 'User' },
    comments: [String],
  },
  { timestamps: true }
);
var Article = mongoose.model('Article', articleSchema);
module.exports = Article;
