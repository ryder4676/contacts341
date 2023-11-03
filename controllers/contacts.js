// These functions help handle contact-related requests, making sure you see the right information.

// Import the required modules
const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

// Define the 'getAll' function, which fetches all contacts from the 'contacts' collection
const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db("professionalData").collection("contacts").find();
    result.toArray().then((contacts) => {
        // Set the response headers and send the contacts as JSON
        res.setHeader("Content-type", "application/json");
        res.status(200).json(contacts);
    });
}
// Define the 'getSingle' function, which fetches a single contact by its ID
const getSingle = async (req, res) => {
    // Parse the user's ID from the request parameters
    const userId = new ObjectId(req.params.id);
    // Find the contact with the specified ID
    const result = await mongodb.getDatabase().db().collection("contacts").find({ _id: userId });
    result.toArray().then((contacts) => {
        // Set the response headers and send the first contact (if found) as JSON
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(contacts[0]);
    });
}
// Export the functions to be used in your routes
module.exports = {
    getAll,
    getSingle
}
