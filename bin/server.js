const db = require('../model/db');
const app = require('../app');
require('dotenv').config();

const PORT = process.env.PORT || process.env.LOCAL_PORT;

db.then(() => {
  app.listen(PORT, () => {
    console.log(`<<<----Server is running on port ${PORT}---->>>`);
    console.log(process.env.PORT);
  });
}).catch(err => {
  console.log(`Server is not running. Error: ${err.message}`);
  process.exit(1);
});
