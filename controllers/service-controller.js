const Service = require("../models/service-model");

const services = async (req, res) => {
  try {
    const data = await Service.find();
    if (!data) {
      res.status(404).json({ msg: "no services available" });
      return;
    }
    res.status(200).json({ msg: data });
  } catch (error) {
    next(error);
  }
};

module.exports = services;
