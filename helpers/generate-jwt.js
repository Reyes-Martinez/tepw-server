const jwt = require("jsonwebtoken");

const generatedJWT = (uid = "", roleid = "") => {
  return new Promise((resolve, reject) => {
    const payload = { uid, roleid };
    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: "4h",
      },
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  generatedJWT,
};
