const userService = require('./../services/user.service');

exports.createUser = async(req, res) => {
  try {
    const userData = await userService.createUser(req.body);

    return res.send(userData);
  } catch (err) {
    return res.status(400).send(err);
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const users = await userService.getAllUser();
    return res.send({
      data: users,
    });
  } catch(err) {
    return res.status(400).send(err);
  }
};