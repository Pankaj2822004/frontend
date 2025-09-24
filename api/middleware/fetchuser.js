
const jwt = require('jsonwebtoken');
// const JWT_SECRET = 'pankajisgoodboy'; // Ensure this is consistent across your application
require("dotenv").config({ path: "./test.env" }); 

const JWT_SECRET = process.env.JWT_SECRET; // read from environment variable

const fetchUser = (req, res, next) => {
  const token = req.header('auth-token');  // ✅ now matches frontend
  console.log("Token received by server:", token);

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error('Invalid token error:', error.message);
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = fetchUser;


