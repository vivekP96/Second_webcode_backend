const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
router.post("/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  const user = await User.findOne({ _id: id });

  if (!user) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + user.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );
    alert("password changed");
  } catch (error) {
    console.log(error);
    res.json({ status: "Something Went Wrong" });
  }
});
module.exports = router;
