var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var registerTemplate = require('../../templates/register.hbs');

var RegisterView = Backbone.View.extend({
// needs a render function!
  el: '.login_fields',
    events: {
      'click #addUser': 'addUser'
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
      this.collection.create( collectionFromInput, {wait: true}); // was validate: true
      $userName.val('');
      $password.val('');
      console.log(this.collection);
    },
    login: function () {
    }
});

module.exports = RegisterView;
