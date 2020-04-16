const crypto = require('crypto');
const userModel = require('./../models/user.model');
const authService = require('./auth.service');

exports.createUser = async(params) => {
  try {
    const salt = crypto.randomBytes(2).toString('hex');
    const password = authService.hashPasswordWithSalt(params.password, salt);

    return await userModel.createUser({
      ...params,
      password, 
      salt,
    });
  } catch (e) {
    throw e;
  }
};

exports.getAllUser = async () => {
  try {
    return await userModel.getAllUser();
  } catch (err) {
    throw err;
  }
};