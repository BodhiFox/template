var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var MainView = require('./views/main-view');
// routes let the client respond to paths instead of just ids (#)
var Router = Backbone.Router.extend({
  routes: {
    '': 'main',
  },
    main: function () {
      this.mainView = new MainView();
      this.mainView.render();
    }
});
// This starts the entire Backbone system going
$(function () {
  window.app = new Router();
  Backbone.history.start();
});
