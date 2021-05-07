const passport = require('passport');
const { response } = require('./helpers');
const { HTTP_CODE } = require('./constants');
require('./passport');

const guard = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (error, user) => {
    const token = req.get('Authorization')?.split(' ')[1];

    if (!user || error || token !== user.token.accessToken) {
      return response(res, HTTP_CODE.FORBIDDEN, { message: 'Access denied' });
    }

    req.user = user;
    return next();
  })(req, res, next);
};

module.exports = guard;
