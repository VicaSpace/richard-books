const logger = (req,res,next)=>{
  const year = new Date().getFullYear()
  const path = req.path
  const method = req.method
  const url = req.url
  console.log(year, path, method, url)
  next()
}

module.exports = {
  logger
}
