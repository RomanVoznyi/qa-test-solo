const jwt = require('jsonwebtoken');
const { TOKEN } = require('../utils/constants');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const response = (res, code, data) => {
  const status = code < 400 ? 'success' : 'error';
  return res.status(code).json({
    status,
    code,
    data,
  });
};

const createTokens = user => {
  const payloadAccess = {
    id: user._id,
    type: TOKEN.ACCESS.TYPE,
    date: Date.now(),
  };
  const payloadRefresh = {
    id: user._id,
    type: TOKEN.REFRESH.TYPE,
    date: Date.now(),
  };
  const accessToken = jwt.sign(payloadAccess, secret, {
    expiresIn: TOKEN.ACCESS.EXPIRES_IN,
  });
  const refreshToken = jwt.sign(payloadRefresh, secret, {
    expiresIn: TOKEN.REFRESH.EXPIRES_IN,
  });
  const expires_on = Date.now() + parseInt(TOKEN.ACCESS.EXPIRES_IN) * 60 * 1000;
  return { accessToken, refreshToken, expires_on };
};

const createNewAccessToken = user => {
  const payloadAccess = {
    id: user._id,
    type: TOKEN.ACCESS.TYPE,
    date: Date.now(),
  };
  const accessToken = jwt.sign(payloadAccess, secret, {
    expiresIn: TOKEN.ACCESS.EXPIRES_IN,
  });
  const expires_on = Date.now() + parseInt(TOKEN.ACCESS.EXPIRES_IN) * 60 * 1000;
  return { accessToken, expires_on };
};

module.exports = { response, createTokens, createNewAccessToken };
