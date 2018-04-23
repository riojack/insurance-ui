const express = require('express'),
  RootRoutes = require('./root.route');

const app = express();

app.use('/', RootRoutes.configure());

app.listen(3320, () => console.log('Started server'));
