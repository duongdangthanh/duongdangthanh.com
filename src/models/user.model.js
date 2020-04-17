const _ = require('lodash');
const users = [{
  email: "covid@group4.com",
  salt: "2ed1",
  password: "fb027ad40f693f119b0af34b0cb7eb01810dd9ccc412ff2096ccdda2eb662405",
  id: 1,
}];

exports.createUser = async (data) => {
  const id = _.maxBy(users, 'id' ).id + 1;
  const newUser = {...data, id};
  users.push(newUser);
  return newUser;
};

exports.getByEmail = (email) => {
  return _.find(users, user => user.email === email);
};

exports.getAllUser = async () => {
  return users;
};
