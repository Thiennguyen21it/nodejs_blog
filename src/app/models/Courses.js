const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
//   author: ObjectId,
//   title: String,
//   body: String,
//   date: Date
name: { type: String, default: 'hahaha' },
  age: { type: Number, min: 18, index: true },
  bio: { type: String, match: /[a-z]/ },
  date: { type: Date, default: Date.now },
  buff: Buffer,
  updateAt : { type: Date, default:Date.now },
})

module.exports = mongoose.model('Course',Course);