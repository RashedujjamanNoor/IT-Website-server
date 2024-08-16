const home = async (req, res) => {
  try {
    res.status(200).send("this is from server");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    res.status(200).json({ msg: req.body });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register };
