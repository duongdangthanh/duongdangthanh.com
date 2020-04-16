/* eslint global-require: 0 */
const app = require('./src/app');
const port = 80;

app.listen(port, () => {
  console.log(`Listen ${port}`);
});