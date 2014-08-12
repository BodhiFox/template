var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var registerTemplate = require('../../templates/register.hbs');

var RegisterView = Backbone.View.extend({
// needs a render function!
  el: '#projector',
    events: {
      'click #addUser': 'addUser'
    },
    initialize: function () {
      window.userCollection = this.collection;
      this.collection.fetch();
      $(this.el).html(loginTemplate);
    },
    render: function () {
      this.$el.html(registerTemplate);
    },
    addUser: function () {
      var $userName = $(this.el).find('#user');
      var $password = $(this.el).find('#pass');

      var userNameInput = $userName.val();
      var passwordInput = $password.val();
      var collectionFromInput = {
        name: userNameInput,
    password: passwordInput,
    creationDate: Date.now()
      };
      console.log(collectionFromInput);
      this.collection.create( collectionFromInput, {wait: true}); // was validate: true
      $userName.val('');
      $password.val('');
      console.log(this.collection);
    },
    login: function () {
    }
});

module.exports = RegisterView;
