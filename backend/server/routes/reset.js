const router = require("express").Router();
const { User } = require("../models/user");
const jwt = require("jsonwebtoken");
router.get("/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);

  const user = await User.findOne({ _id: id });
  if (!user) {
    return res.json({ status: "User does not exists" });
  }
  const secret = process.env.JWTPRIVATEKEY + user.password;
  try {
    const verify = jwt.verify(token, secret);
    res.send("verified");
  } catch (error) {
    res.send("Not verified");
  }
});

//
module.exports = router;
