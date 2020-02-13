const User = require("../users/userDb");

/* 
validates the user id on every request that expects a user id parameter
- if the `id` parameter is valid, store that user object as `req.user`
- if the `id` parameter does not match any user id in the database, 
    cancel the request and respond with status `400` and `{ message: "invalid user id" }`
*/

const validateUserId = (req, res, nxt) => {
  console.log(req.res);
  const id = Number(req.params.id);
  id
    ? User.getById(id)
        .then(validUser => {
          if (validUser) {
            req.user = validUser;
            console.log(`middleware : ${req.body}`);
            req.userBody = req.body;
            nxt();
          } else res.status(400).json({ message: "invalid user id" });
        })
        .catch(er => res.status(400).json({ message: "invalid user id" }))
    : res.status(400).json({ message: "invalid user id" });
};

module.exports = validateUserId;
