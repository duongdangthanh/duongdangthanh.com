const crypto = require('crypto');
const JWTUtils = require ('../utils/jwt.util');
const userModel = require('./../models/user.model');

const _hashPasswordWithSalt = (password, salt) => {
  const hash = crypto.createHmac('sha256', salt);

  hash.update(password);

  return hash.digest('hex');
};

exports.login = async({ email, password }) => {
  try {
    const userInfo = await userModel.getByEmail(email);

    if (!userInfo) {
      throw {
        code: 400,
        message: "USER_NOT_FOUND",
      }
    }

    const newPassword = _hashPasswordWithSalt(password, userInfo.salt);

    if (newPassword !== userInfo.password) {
      throw {
        code: 400,
        message: "WRONG_PASSWORD",
      }
    }

    const tokenData = {
      id: userInfo.id,
      email: userInfo.email,
    };

    return JWTUtils.getSignedObject(tokenData);
  } catch (e) {
    throw e;
  }
};

exports.hashPasswordWithSalt = (password, salt) => {
  return _hashPasswordWithSalt(password, salt);
}