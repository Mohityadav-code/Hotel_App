const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {
  const tokenSecret = req.headers['authorization'];
  const token=tokenSecret.split(' ')[1];
  console.log('token: ', token);

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to authenticate token' });
    }

    req.userId = decoded.userId;
    next();
  });
}

module.exports = verifyJWT;
