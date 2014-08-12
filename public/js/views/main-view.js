var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var loginTemplate = require('../../templates/login.hbs');

var RegisterView = require('./register-view.js');
var LoginView = require('./login-view.js');
var Users = require('../collections/users');

var MainView = Backbone.View.extend({
  el: '#projector',
    events: {
      'click #login': 'login',
    'click #register': 'register'
    },
    collection: new Users(),
    initialize: function () {
      window.userCollection = this.collection;
      this.collection.fetch();
    },
    render: function () {
      var loginView = new LoginView({collection: this.collection});
      loginView.render();
      var registerView = new RegisterView({collection: this.collection});
    },
});

module.exports = MainView;
