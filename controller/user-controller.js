const userModel = require('../model/user-model');
const { nanoid } = require('nanoid');
const {
  response,
  createTokens,
  createNewAccessToken,
} = require('../utils/helpers');
const EmailService = require('../utils/emailservice');
const { HTTP_CODE, REQ_TYPES } = require('../utils/constants');

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.getUserByParam(REQ_TYPES.EMAIL, email);

    if (user) {
      return response(res, HTTP_CODE.CONFLICT, {
        message: 'User with such email is already exist',
      });
    }

    const verifyToken = nanoid();
    const emailService = new EmailService(name, email, verifyToken);
    await emailService.sendMail();

    const { role, subscription, avatar } = await userModel.register({
      name,
      email,
      password,
      verifyToken,
    });

    const newUser = {
      name,
      email,
      subscription,
      role,
      avatar,
      token: {
        accessToken: null,
        refreshToken: null,
        expires_on: '',
      },
    };

    return response(res, HTTP_CODE.CREATED, newUser);
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.getUserByParam(REQ_TYPES.EMAIL, email);

    if (!user || !user.isValidPassword(password)) {
      return response(res, HTTP_CODE.BAD_REQUEST, {
        message: 'Bad request. Wrong email or password',
      });
    }

    if (user.token.verifyToken) {
      return response(res, HTTP_CODE.CONFLICT, {
        message: 'Please, verify your email',
      });
    }

    const { accessToken, refreshToken, expires_on } = createTokens(user);

    await userModel.updateTokens(user._id, accessToken, refreshToken);

    const userData = {
      name: user.name,
      email,
      subscription: user.subscription,
      role: user.role,
      avatar: user.avatar,
      token: {
        accessToken,
        refreshToken,
        expires_on,
      },
    };

    return response(res, HTTP_CODE.SUCCESS, userData);
  } catch (error) {
    next(error);
  }
};

const logoutUser = async (req, res, next) => {
  try {
    await userModel.updateTokens(req.user._id, null, null);
    response(res, HTTP_CODE.SUCCESS, { message: 'Logout successful' });
  } catch (error) {
    next(error);
  }
};

const verifyUser = async (req, res, next) => {
  try {
    const { verifytoken } = req.params;

    const user = await userModel.getUserByParam(REQ_TYPES.VERIFY, verifytoken);

    if (!user) {
      response(res, HTTP_CODE.NOT_FOUND, { message: 'Link is not valid' });
    }

    await userModel.updateVerifyToken(user._id);
    response(res, HTTP_CODE.SUCCESS, {
      message: 'Verification is successfull',
    });
  } catch (error) {
    next(error);
  }
};

const getCurrentUser = async (req, res, next) => {
  try {
    const user = await userModel.getUserByParam(REQ_TYPES.ID, req.user.id);

    const userData = {
      name: user.name,
      email: user.email,
      subscription: user.subscription,
      role: user.role,
      avatar: user.avatar,
      token: {
        accessToken: user.token.accessToken,
        refreshToken: user.token.refreshToken,
      },
    };

    return response(res, HTTP_CODE.SUCCESS, userData);
  } catch (error) {
    next(error);
  }
};

const refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    const user = await userModel.getUserByParam(
      REQ_TYPES.REFRESH,
      refreshToken,
    );

    if (!refreshToken || !user) {
      return response(res, HTTP_CODE.NOT_FOUND, {
        message: "Cann't found user with such token",
      });
    }

    const { accessToken, expires_on } = createNewAccessToken(user);
    await userModel.updateAccessToken(user._id, accessToken);

    const data = {
      name: user.name,
      email: user.email,
      token: {
        accessToken,
        expires_on,
      },
    };

    return response(res, HTTP_CODE.SUCCESS, data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  verifyUser,
  refreshToken,
};
