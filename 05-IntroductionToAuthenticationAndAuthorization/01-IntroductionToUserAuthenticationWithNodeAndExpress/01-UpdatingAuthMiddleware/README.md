# Problem
Stellar Navigator, let's ensure that our authentication middleware in `server/index.js` uses Mongoose to check both `username` and `password` securely.

Update the `authMiddleware` to query the User model for a match with `req.query.username` and `req.query.password`. Keep those galactic credentials secure!