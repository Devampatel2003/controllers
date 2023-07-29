const express = require("express");
const router = express.Router();

//Import Contollers and Validators
const {getOrder,postOrder} = require("../controllers/orderController");
const {ValidateOrder} = require("../middleware/validators");

router
    .get("/",getOrder)
    .post("/",ValidateOrder,postOrder);

//Export The Router
module.exports = router;
