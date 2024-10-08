const Contact = require("../models/contact-model");
const User = require("../models/user-model");
const Service = require("../models/service-model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts === 0) {
      return res.status(404).json({ message: "No contacts found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });

    return res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const deleteContact = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });

    return res.status(200).json({ message: "contact deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const singleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById({ _id: id }, { password: 0 });

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = req.body;
    console.log(userData);

    await User.updateOne(
      { _id: id },
      {
        $set: userData,
      }
    );
    return res.status(200).json({ message: "User Updated successfully" });
  } catch (error) {
    console.log(error);
  }
};

const getAllServices = async (req, res) => {
  try {
    const serviceData = await Service.find();
    if (!serviceData || serviceData === 0) {
      return res.status(200).json({ message: "no services found now" });
    }

    return res.status(200).json(serviceData);
  } catch (error) {
    console.log(error);
  }
};

const createServices = async (req, res) => {
  try {
    const response = req.body;
    console.log(response);

    await Service.create(response);
    return res.status(200).json({ message: "Service created successfully" });
  } catch (error) {
    console.log(error);
  }
};

const deleteService = async (req, res) => {
  try {
    const id = req.params.id;
    await Service.deleteOne({ _id: id });
    return res.status(200).json({ message: "service deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  getAllContacts,
  deleteUser,
  singleUser,
  updateUser,
  deleteContact,
  createServices,
  getAllServices,
  deleteService,
};
