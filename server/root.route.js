const express = require('express'),
path = require('path');

class RootRoutes {
  static configure() {
    const route = express.Router();

    route.get('/', this.rootHandler);
    route.get('/app.min.js', this.appHandler);

    return route;
  }

  static rootHandler(request, response) {
    response.sendFile('./index.html', {
      root: __dirname
    });
  }

  static appHandler(request, response) {
    response.sendFile(path.resolve('./dist/app.js'));
  }
}

module.exports = RootRoutes;
