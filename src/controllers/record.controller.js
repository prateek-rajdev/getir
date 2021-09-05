const { recordService } = require('../services');

const filterRecords = async (req, res) => {
  console.log(req.body, 'controller');
  try {
  const records = await recordService.queryRecords(req.body);  
  res.status(200).send(records);
  }
  catch(error){
    console.log(error);
  }
}

module.exports = 
{
  filterRecords,
}