const authService = require('./../services/auth.service');

exports.login = async(req, res) => {
  try {
    const { email, password } = req.body;
    const response = await authService.login({ email, password });

    return res.send(response);
  } catch (err) {
    return res.status(400).send(err);
  }
};