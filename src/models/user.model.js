const User = require('./../db/schemas/User.shema');

exports.createUser = async (data) => {
  return User.create({
      ...data,
    }).then(user => {
      return user;
    }).catch(err => {
      throw err;
    });
};

exports.getByEmail = (email) => {
  return User.get({ email })
    .then(user => {
      return user;
    }).catch(err => {
      throw err;
    });
};

exports.getAllUser = async () => {
  return User.scan().exec()
    .then(users => {
      return users;
    }).catch(err => {
      throw err;
    });
};