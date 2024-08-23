const adminMiddleware = async (req, res, next) => {
  try {
    const user = req.user;
    const isAdmin = user.isAdmin;
    if (!isAdmin) {
      return res.json({ mesasage: "Acces denied" });
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = adminMiddleware;
