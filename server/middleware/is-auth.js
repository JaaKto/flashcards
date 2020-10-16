const jwt = require("jsonwebtoken")

module.exports = (req, _, next) => {
  const authHeader = req.get("Authorization")
  if (!authHeader) {
    const error = new Error("Not authenticated.")
    error.statusCode = 401
    throw error
  }
  const token = authHeader.split(" ")[1]
  let decodedToken
  try {
    decodedToken = jwt.verify(token, "secret")
  } catch (err) {
    const error = new Error("Token expired. Please login again.")
    error.statusCode = 401
    throw error
  }
  if (!decodedToken) {
    const error = new Error("Not authenticated.")
    error.statusCode = 401
    throw error
  }
  req.userId = decodedToken.userId
  next()
}
