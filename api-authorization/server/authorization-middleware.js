const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error'); // eslint-disable-line

function authorizationMiddleware(req, res, next) {
  /* your code here */
  // console.log('bang');

  const token = req.get('x-access-token');
  if (!token) {
    throw new ClientError(401, 'authentication required');
    // console.log('bangbang');
    // to test, use: http - v get: 3000 / api / flashcards
    // returns bangbang in the server-side terminal
    // returns the appropriate response from the server in the client-side httpie terminal
    // renders in localhost:3000 BROWSER error: authentication required
    // not exactly sure where/how this is happening
  } else {
    const payload = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = payload;
    // console.log('orangebanggang');
    next();
  }

  /**
   * Try to get the 'X-Access-Token' from the request headers.
   * If no token is provided,
   *   throw a 401 error with the message 'authentication required'
   * Use jwt.verify() to verify the authenticity of the token and extract its payload
   * Assign the extracted payload to the user property of the req object.
   * Call next() (with no arguments) to let Express know to advance to its next route or middleware.
   */

  /**
    * References:
    * https://expressjs.com/en/4x/api.html#req.get
    * https://nodejs.org/api/http.html#http_message_headers
    * https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
    */
}

// console.log('fu');
// console.log(authorizationMiddleware);

module.exports = authorizationMiddleware;
