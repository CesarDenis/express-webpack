const express = require('express');
const path = require('path');

const app = express();

require('dotenv').config();
const env = process.env.NODE_ENV || 'development';

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

if (env === 'production') {
  const manifest = require('express-manifest');

  app.use(manifest({
    manifest: path.join(__dirname, 'public') + '/assets.json',
    prepend: path.join(__dirname, 'public'),
    reqPathFind: /^(\/?)/,
    reqPathReplace: '',
    debug: true
  }));
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

module.exports = app;
