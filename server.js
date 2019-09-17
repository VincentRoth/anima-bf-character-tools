const $express = require('express');
const app = $express();

const envDefaultServerPort = process.env.PORT;
const serverPort = envDefaultServerPort || 3000;

app.use(function(req, res, next) {
  if (
    req.headers['x-forwarded-proto'] &&
    req.headers['x-forwarded-proto'] !== 'https'
  ) {
    res.redirect(`https://${req.get('Host')}${req.url}`);
  } else {
    next();
  }
});

app.use($express.static('dist'));

app.use(function(_, res) {
  // Send index page to start Angular app for any non handled URL
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(serverPort);
