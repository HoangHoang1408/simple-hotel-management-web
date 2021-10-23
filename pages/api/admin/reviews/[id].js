import nextConnect from "next-connect";

import { limitRoles, isAuthenticated } from "../../../../middlewares/auth";
import globalErrorHandler from "../../../../middlewares/error";
import dbConnect from "../../../../config/dbConnect";
import { adminDeleteReview } from "../../../../controllers/adminController";

const handler = nextConnect({ onError: globalErrorHandler });

dbConnect();

handler.use(isAuthenticated, limitRoles("admin")).delete(adminDeleteReview);

export default handler;
