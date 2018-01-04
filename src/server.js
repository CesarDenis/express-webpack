const winston = require('winston');

const app = require('./app');

require('dotenv').config();
const port = process.env.Port || 3000;

app.listen(port, () => {
  winston.info(`App listening on port ${port}`);
});
