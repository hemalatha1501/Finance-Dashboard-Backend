export const authorize = (allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.headers.role;

    console.log("ROLE:", userRole); // 🔥 debug

    if (!userRole || !allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
};