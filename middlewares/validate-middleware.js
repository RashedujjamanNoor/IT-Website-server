const validate = (Schema) => async (req, res, next) => {
  try {
    const parseBody = await Schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    const message1 = error.issues[1].message;
    const message2 = error.errors[0].message;
    const message = message1 || message2;
    // console.log(error);
    res.status(400).json({ msg: message });
  }
};

module.exports = validate;
