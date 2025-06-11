import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import UserRoute from "./routes/user.route";

router.use("/", UserRoute);

/* ************************************************************************* */

export default router;
