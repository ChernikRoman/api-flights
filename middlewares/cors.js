function corsHandler(req, res, next) {
  const allowedOrigin = [

  const allowedMethods = 'GET,PUT,HEAD,PATCH,DELETE,POST';
  const allowedHeaders = req.headers['access-control-request-headers'];
  const { origin } = req.headers;

  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', allowedMethods);
    res.header('Access-Control-Allow-Headers', allowedHeaders);
    return res.end();
  }

  next();
}

module.exports = {
  corsHandler,
};