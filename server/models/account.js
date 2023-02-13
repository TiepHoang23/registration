const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const accountSchema = new Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  created: { type: Date, default: Date.now() },
});
const account = mongoose.model('account', accountSchema);
module.exports = account;
