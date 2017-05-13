var base = process.env.PWD;
var jwt = require('jsonwebtoken');
var User = require(base + '/app/models/userModel');
var config = require(base + '/config');
var authenticateUser = (req, res) => {
    User.findOne({name: req.body.name}, (err, user) => {
        if(err) { throw err; }
        if(!user) {
            res.send(500, {
                success: false,
                message: 'Authentication failed: User not Found'
            });
            res.json(500, {
                success: false,
                message: 'Authentication failed: User not Found'
            });
        } else if(user.password != req.body.password) {
            res.send(500, {
                success: false,
                message: 'Authentication failed: Password dose not match'
            });
        } else {
            var token = jwt.sign(user, config.database.mySecret, {
                expiresIn: 1440  //24 hours
            });
            res.send(200, {
                success: true,
                message: 'Token Created !!!',
                token: token
            });
        }
    });
};
var checkAuthentication = (req, res, next) => {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(token) {
        jwt.verify(token, config.database.mySecret, (err, decoded) => {
            if(err) {
                return res.json({
                    success: false,
                    message: 'Failed to authenticate token'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No Token Provided'
        });
    }
};
module.exports = {
    authenticateUser,
    checkAuthentication
};