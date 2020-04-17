global.__base = `${__dirname}/`;
global.__apis = `${__dirname}/src/`;
global.__models = `${__apis}models/`;
global.__services = `${__apis}services/`;
global.__controllers = `${__apis}controllers/`;
global.__routers = `${__apis}routers/`;
global.__utils = `${__apis}utils/`;
global.Constants = require(`${__dirname}/data/Constants`);
