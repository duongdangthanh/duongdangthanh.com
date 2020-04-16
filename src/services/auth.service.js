const crypto = require('crypto');
const JWTUtils = require ('../utils/jwt.util');
const userModel = require('./../models/user.model');

const _hashPasswordWithSalt = (password, salt) => {
  const hash = crypto.createHmac('sha256', salt);

  hash.update(password);

  return hash.digest('hex');
};

const userData = {
  email: "covid@group4.com",
  salt: "2ed1",
  password: "fb027ad40f693f119b0af34b0cb7eb01810dd9ccc412ff2096ccdda2eb662405",
  id: 1,
}

exports.login = async({ email, password }) => {
  try {
    const userInfo = userData.email === email ? userData : null;

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