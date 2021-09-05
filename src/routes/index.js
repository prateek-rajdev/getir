// const express = require('express');
// const recordRoute = require('./record.route');

// const router = express.Router();

// router.use('/records', recordRoute);

// module.exports = router;

const routes = require('./record.route')

module.exports.routes = routes;