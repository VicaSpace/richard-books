const axios = require("axios");
const db = require("../../models");
const { fetchDataService } = require("../services/dataService.js");

const fetchData = async (req, res) => {
  const response = await fetchDataService();
  res.status(201).send(response);
}

module.exports = {
  fetchData
}
