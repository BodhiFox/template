var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var LoginView = require('./views/login-view');
var RegisterView = require('./views/register-view');
// routes let the client respond to paths instead of just ids (#)
var Router = Backbone.Router.extend({
  routes: {
    '': 'login',
    '/register': 'register'
  },
    login: function () {
      this.loginView = new LoginView();
      this.loginView.render();
    },
    register: function () {
      this.registerView = new RegisterView();
      this.registerView.render();
    }
});
// This starts the entire Backbone system going
$(function () {
  window.app = new Router();
  Backbone.history.start();
});
