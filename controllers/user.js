const user = require("./../model/users");

exports.createUser = (req, res) => {
  const user_ = new user({
    email: req.body.email,
    password: req.body.password
  });
  user_
    .save()
    .then(result => {
      res.send({ res: result });
    })
    .catch(err => {
      res.status(500).send({ res: err });
    });
};

exports.loginUser = async (req, res) => {
  try {
    await user
      .find({
        email: req.body.email,
        password: req.body.password
      })
      .then(result => {
        if (result.length > 0) {
          res.send({ res: result });
        } else {
          throw new Error("User not found");
        }
      })
      .catch(err => {
        throw err;
      });
  } catch (err) {
    res.status(500).send({ res: "User not found" });
  }
};
