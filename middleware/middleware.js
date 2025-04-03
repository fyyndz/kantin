const adminStanMiddleware = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin_stan') {
    return res.status(403).json({ success: false, message: "Access denied. Admin Stan only." });
  }
  next();
};

module.exports = adminStanMiddleware;
