const { validationResult } = require("express-validator");

const getOrder = (req, res) => {
    res.render("pages/order");
};

const postOrder = (req, res) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.render("pages/order", { errors: errors.array() });
    } else {

        let fullName = req.body.fullname;
        let email = req.body.email;
        let contactNumber = req.body.contactNumber;
        let address = req.body.address;
        let city = req.body.city;
        let postalCode = req.body.postalCode;
        let province = req.body.province;
        let deliveryAddress = `${address},${city},${province},${postalCode}`;

        let product1 = 2 * req.body.productOne;
        let product1Quantity = req.body.product1;
        let product2Quantity = req.body.productTwo;
        let product3Quantity = req.body.productThree;

        let productTwo = 3 * req.body.productTwo;
        let product2 = productTwo;

        let productThree = 5 * req.body.productThree;
        let product3 = productThree;

        let shippingCharges = 20;
        let subtotal = product1 + product2 + product3 + shippingCharges;

        let taxes = ((13/100) * subtotal);
        let total = (parseFloat(subtotal) + parseFloat(taxes));

        res.render("pages/receipt", {
            name: fullName,
            email: email,
            phone: contactNumber,
            deliveryAddress: deliveryAddress,
            province: province,
            product1: product1,
            product2: product2,
            product3: product3,
            shippingCharges: shippingCharges,
            subtotal: subtotal,
            taxes: taxes,
            total: total,
            product1Quantity: product1Quantity,
            product2Quantity: product2Quantity,
            product3Quantity: product3Quantity
        });
    }
};

// Export Modules
module.exports = {
    getOrder,
    postOrder
};
