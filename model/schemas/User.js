const { Schema, model } = require('mongoose');
const gravatar = require('gravatar');
const bcrypt = require('bcrypt');
const { ROLE, SUBSCRIPTION } = require('../../utils/constants');
const saltRounds = 10;

const UserSchema = new Schema(
  {
    name: { type: String, minLength: 3, required: [true, 'Input user name'] },
    email: {
      type: String,
      match: /^.*@.*$/,
      unique: true,
      required: [true, 'Input user email'],
    },
    password: {
      type: String,
      minLength: 8,
      required: [true, 'Input user password'],
    },
    subscription: {
      type: String,
      enum: [SUBSCRIPTION.FREE, SUBSCRIPTION.PRO, SUBSCRIPTION.PREMIUM],
      default: SUBSCRIPTION.FREE,
    },
    role: {
      type: String,
      enum: [ROLE.ADMIN, ROLE.STUDENT],
      default: ROLE.STUDENT,
    },
    avatar: {
      type: String,
      default: function () {
        return gravatar.url(this.email, { s: 200 });
      },
    },
    token: {
      verifyToken: { type: String, default: null },
      accessToken: { type: String, default: null },
      refreshToken: {
        type: String,
        default: null,
      },
    },
    onlyGoogleRegister: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true },
);

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(saltRounds);
  this.password = await bcrypt.hashSync(this.password, salt, null);
  next();
});

UserSchema.methods.isValidPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model('user', UserSchema);

module.exports = User;
