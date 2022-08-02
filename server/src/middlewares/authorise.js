const authorise = (permittedRoles) => {
  return (req, res, next) => {
    const user = req.user;
    console.log(user);
    let isPermitted = false;
    permittedRoles.map((role) => {
      if (user.role.includes(role)) {
        isPermitted = true;
      }
    });
    if (isPermitted) {
      return next();
    } else {
      return res
        .status(401)
        .send({ message: 'not authorised ' });
    }
  };
};
module.exports = authorise;
