const dynamoose = require('dynamoose');
const Schema = dynamoose.Schema;
const uuid = require('uuid');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    hashKey: true,
  },
  id: {
    type: String,
    required: true,
    default: uuid.v1(),
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
  },
  salt: {
    type: String,
  },
  createdBy: {
    type: String
  },
  updatedBy: {
    type: String
  },
  deleted: {
    type: Boolean,
    default: false,
  },
},
{
  throughput: {read: 15, write: 5},
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
},
);

module.exports = dynamoose.model('User', userSchema);