var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var registerTemplate = require('../../templates/register.hbs');

var RegisterView = Backbone.View.extend({
  el: '#projector',
    events: {
      'click #addUser': 'addUser'
    },
    render: function () {
      this.$el.html(registerTemplate());
    },
    addUser: function () {
      var $username = $(this.el).find('#username');
      var $password = $(this.el).find('#password');

      var usernameInput = $username.val();
      var passwordInput = $password.val();
      var collectionFromInput = {
        username: usernameInput,
    password: passwordInput,
    creationDate: Date.now()
      };
      alert(collectionFromInput.name + ' ' + collectionFromInput.password);
      console.log(collectionFromInput);
      this.collection.create( collectionFromInput, {wait: true}); // was validate: true
      $username.val('');
      $password.val('');
      console.log(this.collection);
    },
    login: function () {
    }
});

module.exports = RegisterView;
