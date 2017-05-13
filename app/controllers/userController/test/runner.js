process.env.NODE_ENV = 'test';

var base = process.env.PWD;
var config = require(base + '/config');
var logger = require('mocha-logger');
var mongoose  = require('mongoose');
var User = require(base + '/app/models/userModel');
var userController = require(base + '/app/controllers/userController/user');
var should = require('should');
var testUtils = require(base + '/Test/utils');

describe('API TESTING', () => {
    var id, dummyUser, userToken;

    before((done) => {
        mongoose.connect(config.database.dbTest, (err, user) => {
            if(err) { logger.log('Error in connecting database: ' + err) }
            else { done(); }
        });

        dummyUser = new User({
            'name': 'dummyName',
            'password': 'dummyPassword'
        });

        dummyUser.save((err, user) => {
            if(err) { logger.log('Error in saving user: ' + err); }
            else { id = user._id; }
        });

    });

    describe('CREATE USER', () => {
        it('should create a new user', (done) => {
            var req = {
                body: {
                    'name':'new user',
                    'password': 'new password'
                }
            };
            var res = testUtils.responseValidatorAsync(200, (user) => {
                user.should.have.property('name');
                user.name.should.equal('new user');
                done();
            });
            userController.createUser(req, res);
        });
    });

    describe('GET ALL USERS', () => {
        it('should get all the users', (done) => {
            var req = {};
            var res = testUtils.responseValidatorAsync(200, (users) => {
                users.length.should.have.equal(2);
                users[0].should.have.property('name');
                users[0].name.should.equal('dummyName');
                done();
            });
            userController.getUsers(req, res);
        });
    });

    after((done) => {
        User.remove({}, (err) => {
            if(err) { logger.log('Error in removing all users from database: ' + err); }
            mongoose.disconnect(done);
        });
    });
});