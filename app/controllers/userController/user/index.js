var base = process.env.PWD;
var User = require(base + '/app/models/userModel');
var createUser = (req, res) => {
    var user = new User(req.body);
    user.save((err, user) => {
        if(err) { res.send(500, {err: err}) }
        else { res.send(200, user); }
    });
};
var getUsers = (req, res) => {
    User.find({}, (err, users) => {
        if(err) { res.send(500, {err: err}) }
        else { res.send(200, users); }
    });
};
module.exports = {
    createUser,
    getUsers
};