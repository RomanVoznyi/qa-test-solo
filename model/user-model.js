const User = require('./schemas/User');
const { REQ_TYPES } = require('../utils/constants');

const register = async ({ name, email, password, verifyToken }) => {
  const newUser = User({
    name,
    email,
    password,
    token: {
      verifyToken,
    },
  });
  return await newUser.save();
};

const getUserByParam = async (param, value) => {
  switch (param) {
    case REQ_TYPES.EMAIL:
      return await User.findOne({ email: value });
    case REQ_TYPES.VERIFY:
      return await User.findOne({ 'token.verifyToken': value });
    case REQ_TYPES.REFRESH:
      return await User.findOne({ 'token.refreshToken': value });
    default:
      return await User.findById(value);
  }
};

const updateTokens = async (id, accessToken, refreshToken) => {
  return await User.findByIdAndUpdate(id, {
    'token.accessToken': accessToken,
    'token.refreshToken': refreshToken,
  });
};

const updateVerifyToken = async id => {
  return await User.findByIdAndUpdate(id, {
    'token.verifyToken': null,
  });
};

const updateAccessToken = async (id, accessToken) => {
  return await User.findByIdAndUpdate(id, {
    'token.accessToken': accessToken,
  });
};

module.exports = {
  register,
  getUserByParam,
  updateTokens,
  updateVerifyToken,
  updateAccessToken,
};
