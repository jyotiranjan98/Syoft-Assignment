require('dotenv').config();
const jwt = require('jsonwebtoken');

const verify = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) return reject(err);

      return resolve(decoded);
    });
    console.log(decoded);
  });
};

const authenticate = async (req, res, next) => {
  if (!req.headers.authorization)
    return res
      .status(400)
      .send({ message: ' token not found ' });

  if (!req.headers.authorization.startsWith('Bearer'))
    return res
      .status(400)
      .send({ message: 'token not found ' });

  const token = req.headers.authorization.trim().split(' ')[1];

  let decoded;
  try {
    decoded = await verify(token);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ message: 'token not found' });
  }

  req.user = decoded.user;

  return next();
};

module.exports = authenticate;
