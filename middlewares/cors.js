function corsHandler(req, res, next) {
  const allowedOrigin = [
    'https://flights-three.vercel.app',
    'http://flights-three.vercel.app',
    'http://localhost:3000',
    'http://localhost:3001',
  ];
  const allowedMethods = 'GET,PUT,HEAD,PATCH,DELETE,POST';
  const allowedHeaders = req.headers['access-control-request-headers'];
  const { origin } = req.headers;

  if (allowedOrigin.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
  }

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