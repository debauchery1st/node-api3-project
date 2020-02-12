const User = require("../users/userDb");
/* 
validates the user id on every request that expects a user id parameter
- if the `id` parameter is valid, store that user object as `req.user`
- if the `id` parameter does not match any user id in the database, 
    cancel the request and respond with status `400` and `{ message: "invalid user id" }`
*/

const validateUserId = (req, res, nxt) => {
  const { id } = req.headers;
  id
    ? User.getById(id)
        .then(validUser => {
          validUser
            ? (req.user = validUser && nxt())
            : res.status(400).json({ message: "invalid user id" });
        })
        .catch(er => res.status(400).json({ message: "invalid user id" }))
    : res.status(400).json({ message: "invalid user id" });
};

module.exports = validateUserId;
