var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var loginTemplate = require('../../templates/login.hbs');

var RegisterView = require('./register-view.js');
var Users = require('../collections/users');

var LoginView = Backbone.View.extend({
  el: '#projector',
    events: {
      'click #login': 'login',
    'click #register': 'register'
    },
    render: function () {
      this.$el.html(loginTemplate);
    },
    login: function () {
      alert('login attempt!');
    },
    register: function () {
      alert('registration attempt!');
      this.registerView = new RegisterView({collection: this.collection});
      this.registerView.render();
    }
});

module.exports = LoginView;
