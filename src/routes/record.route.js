const filterRecords =  require('../controllers/record.controller');
const validate = require('../middleware/validate');
const recordValidation = require('../validations/record.validation');
const recordController = require('../controllers/record.controller');


const routes = (app) => {
    app.route('/records').post(validate(recordValidation.getRecords), filterRecords.filterRecords);
}

module.exports.routes = routes;