import jwt from "jsonwebtoken";
import mallModel from "../Model/mall.model.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.token;
    if (!token) {
      //   return next(new ApiError("Token not provided.", 401));
      return res.status(401).json({ message: "Token not provided." });
    }
    const userId = jwt.verify(token, "LXSzmpoL1d0FFIlyjzlUIAzV0gARbLoBF4JA2bo");
    if (!userId) return res.status(400).json({ message: "Invalid token." });
    // if (!userId) return next(new ApiError("Invalid token.", 400));

    const user = await mallModel.findById({ _id: userId.id });

    if (!user) {
      return res.status(404).json({message:"User Not Found."});
    }

    if (user.status == false || user.deleted_at !== null) {
      return res.status(403).json({ message: "Your account has been suspended. Please contact admin." });
    }
    req.user = user;
    next();
  } catch (error) {
    return next(error);
  }
};

export default authMiddleware;
