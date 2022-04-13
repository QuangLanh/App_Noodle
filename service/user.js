const userModel = require("../models/user_models");

const users = [{ id: 1, username: "1", password: "1" }];

exports.login = async function Login(username) {
  // const user = User.filter(us=>us.username == username)[0] || null
  const user = await userModel.findOne(
    { username: username },
    "id username password"
  );
  console.log(user, username);
  return user;
};
