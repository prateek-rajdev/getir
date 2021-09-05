const express = require('express');
const routes = require('./src/routes/record.route').routes;
const PORT = 4000;

const app = express();
app.use(express.json());
app.use(express.urlencoded());

routes(app);

app.listen(process.env.PORT || PORT, () =>
console.log(`Your server is running on port ${PORT}`))

module.exports.app = app;