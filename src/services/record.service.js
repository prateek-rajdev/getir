const Record = require('../models/record.model');

const queryRecords = async (req, res) => {
  const matches = [];
  const aggregationQuery = [
    {
      $project: {
        key: 1,
        createdAt: 1,
        totalCount: { $sum: '$counts' },
      },
    },
  ];
  const filter = req;
  // TODO: parsing
  filter.minCount = Number(filter.minCount);
  filter.maxCount = Number(filter.maxCount);

  if (filter.startDate) matches.push({ createdAt: { $gt: new Date(filter.startDate) } });
  if (filter.endDate) matches.push({ createdAt: { $lt: new Date(filter.endDate) } });
  if (filter.minCount !== undefined) matches.push({ totalCount: { $gt: filter.minCount } });
  if (filter.maxCount !== undefined) matches.push({ totalCount: { $lt: filter.maxCount } });
  if (matches.length !== 0) {
    aggregationQuery.push({
      $match: {
        $and: matches,
      },
    });
  }
  console.log('a', aggregationQuery, filter);
  const records = await Record.aggregate(aggregationQuery);
  return records;
}

module.exports.queryRecords = queryRecords;