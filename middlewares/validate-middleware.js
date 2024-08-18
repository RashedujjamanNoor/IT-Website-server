const validate = (Schema) => async (req, res, next) => {
  try {
    const parseBody = await Schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    const message = "fill the input properly";
    const extraDetails = error.errors[0].message;
    const status = 400;
    const errors = {
      message,
      status,
      extraDetails,
    };
    next(errors);
    // res.status(400).json({ msg: message });
  }
};

module.exports = validate;
