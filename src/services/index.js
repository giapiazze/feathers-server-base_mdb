const roles = require('./roles/roles.service.js');
const users = require('./users/users.service.js');
module.exports = function (app) {
  app.configure(roles);
  app.configure(users);
};
