const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const { response } = require('./utils/helpers');
const { HTTP_CODE } = require('./utils/constants');
const userRouter = require('./routes/user-routes');

const app = express();
app.use(cors());
app.use(helmet());
app.use(logger(app.get('env') === 'development' ? 'dev' : 'short'));
app.use(express.json({ limit: 10000 }));

app.use('/', userRouter);

app.use('/api/users', userRouter);

app.use((_req, res) => {
  response(res, HTTP_CODE.NOT_FOUND, { message: 'Not found' });
});

app.use((err, _req, res, _next) => {
  response(res, HTTP_CODE.SERVER_ERROR, {
    message: `Something wrong. ${err.message}`,
  });
});

module.exports = app;
