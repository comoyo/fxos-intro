var connect = require('connect');

connect.static.mime.define({
  'text/cache-manifest': ['appcache'],
  'application/x-web-app-manifest+json': ['webapp']
});

var app = connect()
  .use(connect.static(__dirname + '/www'));

app.listen(8080);
