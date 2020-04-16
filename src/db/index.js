const dynamoose = require('dynamoose');

dynamoose.AWS.config.update({
  accessKeyId: process.CBS_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.CBS_AWS_SECRET_ACCESS_KEY,
  region: 'ap-southeast-1',
});

module.exports = {};