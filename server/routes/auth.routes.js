const { verifyNewEmployee } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/auth/signupEmployee",
        [
            verifyNewEmployee.checkDuplicateSsn
        ],
        controller.signupEmployee
    );

    app.post("/auth/signinEmployee", controller.signinEmployee);

    // TODO add customer auth routes
    app.post("/auth/signinCustomer", controller.signinCustomer);
};