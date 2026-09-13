import jwt from "jsonwebtoken";
 

// only acces for user
const userMiddleware = (req, res, next) => {
  try {
    const token =
      req.cookies?.token ||
      req.headers?.authorization?.split(" ")[1];

    // Token छैन
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }

    // Token verify
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;

    // Next middleware/controller
    return next();

  } catch (err) {
    console.log(err.message);

    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
};

// access for admin only
const adminMiddleware = (req, res, next) => {
  try {
    const token =
      req.cookies?.token ||
      req.headers?.authorization?.split(" ")[1];

    // Token छैन
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }

    // Token verify
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );
console.log("decoded:", decoded);
console.log("role:", decoded.role);

if(decoded.role !== "admin"){
    return res.status(403).json({
        message : "invalid Unautharized"
    })
}

    req.user = decoded;

    // Next middleware/controller
    return next();

  } catch (err) {
    console.log(err.message);

    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
};


export default {
    userMiddleware , adminMiddleware
}
