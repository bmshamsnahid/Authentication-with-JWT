var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
var userSchema = new Schema({
    name: { type: String, Required: true},
    password: { type: String, Required: true},
    admin: { type: Boolean, Required: false, default: false}
});
module.exports = mongoose.model('User', userSchema);