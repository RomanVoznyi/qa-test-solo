const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const userModel = require('../model/user-model');
const { REQ_TYPES } = require('./constants');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
};

passport.use(
  new Strategy(options, async (payload, done) => {
    try {
      const user = await userModel.getUserByParam(REQ_TYPES.ID, payload.id);
      if (!user) {
        return done(new Error('User not found'));
      }
      if (!user.token.accessToken) {
        return done(null, false);
      }
      return done(null, user);
    } catch (err) {
      done(err);
    }
  }),
);
