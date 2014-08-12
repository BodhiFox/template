var Backbone = require('backbone');

var User = Backbone.Model.extend({
  validate: function (attrs) {
    if (attrs.userName.length < 1) {
      alert("no user name provided");
      return "no user name provided";
    }
    if (attrs.password !== attrs.verify) {
      alert("Passwords do not match!");
      return false; // Rather than continue with default password
    }
  }
});

module.exports = User;
