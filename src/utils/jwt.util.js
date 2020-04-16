const jwt = require('jsonwebtoken');
const passportJWT = require('passport-jwt');

const { ExtractJwt } = passportJWT;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromExtractors(
    [ExtractJwt.fromAuthHeaderAsBearerToken(),
      ExtractJwt.fromHeader('Authorization'),
      ExtractJwt.fromUrlQueryParameter('access_token'),
      ExtractJwt.fromBodyField('access_token')]
  ),
  secretOrKey: "Thanh123",
  passReqToCallback: true,
  expire: 604800,
  refreshExpire: 604800
};

/**
 * Sign the authentication object
 * @param payload
 */
module.exports = {
  getSignedObject(payload) {
    return {
      tokenType: 'bearer',
      accessToken: jwt.sign(
        payload,
        jwtOptions.secretOrKey,
        {
          expiresIn: jwtOptions.expire,
          noTimestamp: true
        }
      ),
      refreshToken: jwt.sign(
        { rf: 1, ...payload },
        jwtOptions.secretOrKey,
        {
          expiresIn: jwtOptions.refreshExpire,
          noTimestamp: true
        }
      ),
      expiresIn: jwtOptions.expire
    };
  },

  async refreshToken(token) {
    return await jwt.verify(token, jwtOptions.secretOrKey, {
      expiresIn: jwtOptions.refreshExpire,
      noTimestamp: true
    });
  }
};