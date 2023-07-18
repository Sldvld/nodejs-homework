const { HttpError, sendMail } = require("../../helpers");
const { User } = require("../../models/user");

const resentVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(404, "User not found");
  }
  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }
  await sendMail({
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${process.env.BASE_URL}/api/users/verify/${user.verificationToken}">
    Click to verify
    </a>`,
  });
  res.json({
    message: "Verification email sent",
  });
};

module.exports = resentVerifyEmail;
