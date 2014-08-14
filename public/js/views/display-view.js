var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var displayTemplate = require('../../templates/display.hbs');

var DisplayView = Backbone.View.extend({
  el: '#projector',
    events: {
      'click #fullscreen': 'fullscreen',
    'click #play': 'play;'
    },
    render: function () {
      this.$el.html(displayTemplate);
    },
    fullscreen: function () {
      alert('fullscreen attempt!');
    },
    play: function () {
      alert('play attempt!');
    }
});

module.exports = DisplayView;
