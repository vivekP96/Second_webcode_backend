const router = require("express").Router();
const { User } = require("../models/user");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const validate = (data) => {
  const schema = joi.object({
    email: joi.string().email().required().label("email"),
  });
  return schema.validate(data);
};
router.post("/forgetpassword", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });

    if (!user)
      return res
        .status(401)
        .send({ message: "Invalid Email or User not exists!!" });
    const secret = process.env.JWTPRIVATEKEY + user.password;
    const token = jwt.sign({ email: user.email, id: user._id }, secret, {
      expiresIn: "5m",
    });

    const link = `http://localhost:5000/api/resetpassword/${user._id}/${token}`;

    console.log(link);
    return res.status(200).send({ message: "Reset link sent Successfully" });
  } catch (error) {}
});
// router.get("/:id/:token", async (req, res) => {
//   const { id, token } = req.params;
//   console.log(req.params);
//   res.send("done");
// });
module.exports = router;
