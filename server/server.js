const express = require('express'),
  RootRoutes = require('./root.route'),

  PORT = 3320;

const app = express();

app.use('/', RootRoutes.configure());

app.listen(PORT, () => console.log(`It's working! IT'S WORKING!\nOpen yer browser: http://localhost:${PORT}/`));
