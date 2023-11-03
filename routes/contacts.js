// Import the necessary modules
const router = require("express").Router();
const contactsController = require("../controllers/contacts");

// Define routes and link them to controller functions
// This route responds to GET requests on the root path and invokes the 'getAll' function from the 'contactsController'
router.get("/", contactsController.getAll);

// This route responds to GET requests with an 'id' parameter and invokes the 'getSingle' function from the 'contactsController'
router.get("/:id", contactsController.getSingle);

// Export the router to be used in other parts of your application
module.exports = router;
