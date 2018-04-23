const express = require('express');

class RootRoutes {
  static configure() {
    const route = express.Router();

    route.get('/', this.rootHandler);

    return route;
  }

  static rootHandler(request, response) {
    response.send('Hello, world!');
  }
}

module.exports = RootRoutes;
