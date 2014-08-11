var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var loginTemplate = require('../../templates/login.hbs');
var RegisterView = require('./register-view.js');
var loginTemplate = require('../../templates/login.hbs');
var Users = require('../collections/users');

var LoginView = Backbone.View.extend({
  el: '#projector',
    collection: new Users(),
    initialize: function () {
      window.userCollection = this.collection;
      this.collection.fetch();
      $(this.el).html(loginTemplate);
    },
    render: function () {
      var loginView = new LoginView({collection: this.collection});
      //loginView.render(); //hey look, recursion! oops.
      $('#projector').html(loginView.$el);

      var registerView = new RegisterView({collection: this.collection});

    }

});

module.exports = LoginView;
