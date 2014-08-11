var Backbone = require('backbone');
var User = require('../models/user');
var Users = Backbone.Collection.extend({
  model: User,
    url: '/api/users', //can specify a url here, like /api/users
                       // then have server.js serve up db info
    comparator: 'creationDate'
});

module.exports = Users;
