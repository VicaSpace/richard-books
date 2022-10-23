const { fetchDataService } = require('../services/dataService');

const fetchData = async (_req, res) => {
  const response = await fetchDataService();
  res.status(201).send(response);
};

module.exports = {
  fetchData,
};
