const logger = (req, res, next) => {
  const year = new Date().getFullYear();
  const { path } = req;
  const { method } = req;
  const { url } = req;
  console.log(year, path, method, url);
  next();
};

module.exports = {
  logger,
};
