HTTP_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  SERVER_ERROR: 500,
};

ROLE = {
  STUDENT: 'student',
  ADMIN: 'admin',
};

SUBSCRIPTION = {
  FREE: 'free',
  PRO: 'pro',
  PREMIUM: 'premium',
};

TOKEN = {
  ACCESS: {
    TYPE: 'access',
    EXPIRES_IN: '2m',
  },
  REFRESH: {
    TYPE: 'refresh',
    EXPIRES_IN: '30d',
  },
};

REQ_TYPES = {
  EMAIL: 'email',
  ID: 'id',
  VERIFY: 'verify',
  REFRESH: 'refresh',
};

module.exports = { HTTP_CODE, ROLE, SUBSCRIPTION, TOKEN, REQ_TYPES };
