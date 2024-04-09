const express = require("express");
const router = express.Router();
const workordersController = require("../../../controllers/workordersController");

router.get("/:workOrderId", workordersController.getActivities);
module.exports = router;
