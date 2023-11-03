// Import necessary modules
const router = require("express").Router();

// Define a route that responds with "Hello World" for the root path
router.get("/", (req, res) => {
    res.send("Hello World");
});

// Use the "/contacts" route defined in the "contacts" module
router.use("/contacts", require("./contacts"));

// Export the router to be used by other parts of your application
module.exports = router;
