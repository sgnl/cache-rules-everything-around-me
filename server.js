const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

const server = express();
const PORT = 8080;

server.engine('.hbs', handlebars({extname: '.hbs', defaultLayout: 'main'}));
server.set('view engine', '.hbs');

server.use(bodyParser.json());
// server.use(creamCache.init()); /* student implements this */
// server.use('/api', api);

server.get('/', (req, res) => {
  res.render('index');
});

server.listen(PORT, () => {
  process.stdout.write(`server listening on port ${PORT}`);
});
