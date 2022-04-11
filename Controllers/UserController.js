const User = require("../model/User");
const { check, validationResult } = require("express-validator");

const createUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      dob: req.body.dob,
      userAddress: req.body.userAddress,
    });

    return res.send(user);
  } catch (err) {
    res.send(err);
  }
};

const getUser = async (req, res) => {
  try {
    const getAllUser = await User.find();

    res.status(200).send(getAllUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

const getUserById = async (req, res) => {
  try {
    const getUserByIdd = await User.findById(req.params.id);
    res.status(200).send(getUserByIdd);
  } catch (error) {
    res.status(400).send(error);
  }
};

const removeUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).send("User Deleted");
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateUser = async (req, res) => {
  try {
    await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          dob: req.body.dob,
          userAddress: req.body.userAddress,
        },
      }
    );

    res.send("user Updated");
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  createUser,
  getUser,
  getUserById,
  removeUser,
  updateUser,
};
